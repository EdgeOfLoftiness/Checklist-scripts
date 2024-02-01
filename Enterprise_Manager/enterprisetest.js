const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

const linksToVisit = [
    { name: 'BD_PRODSBF', url: 'https://consola-oem.sb.cl:7803/em/faces/db-homepage-ashViewer?type=rac_database&target=PRODSBF_p-sbf-s1' },
    { name: 'BD_PRODERP', url: 'https://consola-oem.sb.cl:7803/em/faces/db-homepage-ashViewer?type=rac_database&target=PRODERP_p-erp-st1&target=PRODERP_p-erp-st1&type=rac_database' },
    { name: 'BD_PRODSYB', url: 'https://consolaoem.sb.cl/em/faces/db-homepage-ashViewer?type=rac_database&target=PRODSYB_p-syb-st1' },
    { name: 'BD_MDSOA', url: 'https://consola-oem.sb.cl:7803/em/faces/db-homepage-ashViewer?type=oracle_database&target=MDSOA_sbpdbsoa12c2-c.sb.cl&target=MDSOA_sbpdbsoa12c2-c.sb.cl&type=oracle_database' },
    { name: 'BD_PRDSOA12C', url: 'https://consola-oem.sb.cl:7803/em/faces/db-homepage-ashViewer?type=oracle_database&target=PRDSOA12C_sbpdbsoa12c-c.sb.cl&target=PRDSOA12C_sbpdbsoa12c-c.sb.cl&type=oracle_database' },
    { name: 'BD_BDFPEBS', url: 'https://consola-oem.sb.cl:7803/em/faces/db-homepage-ashViewer?type=oracle_database&target=PRDSB12_bdfpebs.domc001.cl' },
];

const username = 'MONDB';
const password = 'oracle321';
const secondUsername = 'dbsnmp';
const secondPassword = 'Oracle123';

async function ensureDirectoryExists(directory) {
    try {
        await fs.access(directory);
    } catch (error) {
        await fs.mkdir(directory, { recursive: true });
    }
}

async function takeScreenshotWithLogin(url, username, password, outputName, secondUsername, secondPassword) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(url);

    const textInputs = await page.$$('.textinput');

    if (textInputs.length >= 2) {
        await textInputs[0].type(username);
        await textInputs[1].type(password);
    } else {
        console.log('Username or password input not found');
        return;
    }

    const formButton = await page.$('.formButton');

    if (formButton) {
        await formButton.click();
    } else {
        console.log('Button with class formButton not found');
        return;
    }

    await page.waitForNavigation();

    // logica para segundo login
    const secondTextInputs = await page.$$('.textinput');
if (secondTextInputs.length >= 2) {
    await secondTextInputs[0].type(secondUsername);
    await secondTextInputs[1].type(secondPassword);

    const conexionTitle = await page.$eval('.titleClass', (element) => element.textContent);
    if (conexionTitle.includes('Conexión')) {
        console.log('Found "Conexión" title on the second login screen.');
    } else {
        console.log('Title "Conexión" not found on the second login screen');
        return;
    }

    await page.waitForNavigation();
}


    const defaultImagesFolder = path.join(os.homedir(), 'Pictures');
    const fullOutputPath = path.join(defaultImagesFolder);

    await ensureDirectoryExists(fullOutputPath);

    const screenshotPath = path.join(fullOutputPath, `${outputName}.png`);

    await page.screenshot({ path: screenshotPath });

    await browser.close();

    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
}

async function run() {
    console.log('Choose a link to visit:');
    for (let i = 0; i < linksToVisit.length; i++) {
        console.log(`${i + 1}. ${linksToVisit[i].name}`);
    }
    console.log(`${linksToVisit.length + 1}. Run all links`);

    const userInput = await getUserInput();

    if (userInput >= 1 && userInput <= linksToVisit.length) {
        const selectedLink = linksToVisit[userInput - 1];
        await takeScreenshotWithLogin(selectedLink.url, username, password, selectedLink.name, secondUsername, secondPassword);
    } else if (userInput === linksToVisit.length + 1) {
        for (const link of linksToVisit) {
            await takeScreenshotWithLogin(link.url, username, password, link.name, secondUsername, secondPassword);
        }
    } else {
        console.log('Invalid choice. Exiting.');
    }
}

async function getUserInput() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readline.question('Enter your choice(only numbers): ', (input) => {
            readline.close();
            resolve(parseInt(input));
        });
    });
}

run();
