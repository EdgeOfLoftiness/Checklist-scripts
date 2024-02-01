const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

const linksToVisit = [
    { name: '" },
    { name: '" },
];

const username = '';
const password = '';

async function ensureDirectoryExists(directory) {
    try {
        await fs.access(directory);
    } catch (error) {
        await fs.mkdir(directory, { recursive: true });
    }
}

async function takeScreenshotWithLogin(url, username, password, outputName) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(url);

    await page.waitForXPath('//input[@data-test-subj="loginUsername"]');
    const usernameInput = await page.$x('//input[@data-test-subj="loginUsername"]');
    
    await page.waitForXPath('//input[@data-test-subj="loginPassword"]');
    const passwordInput = await page.$x('//input[@data-test-subj="loginPassword"]');

    if (usernameInput.length > 0 && passwordInput.length > 0) {
        await usernameInput[0].type(username);
        await passwordInput[0].type(password);
    } else {
        console.log('Username or password input not found');
        await browser.close();
        return;
    }

    // Wait for the form button to be present
    await page.waitForSelector('.euiButton__text');
    
    // Click the form button
    await page.click('.euiButton__text');

    await page.waitForNavigation();

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
        await takeScreenshotWithLogin(selectedLink.url, username, password, selectedLink.name);
    } else if (userInput === linksToVisit.length + 1) {
        for (const link of linksToVisit) {
            await takeScreenshotWithLogin(link.url, username, password, link.name);
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
