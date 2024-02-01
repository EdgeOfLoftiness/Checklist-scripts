const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

const linksToVisit = [
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
];

const username = '';
const password = '';
const secondUsername = '';
const secondPassword = '';

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
