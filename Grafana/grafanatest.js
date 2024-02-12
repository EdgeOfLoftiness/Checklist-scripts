const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

const linksToVisit = [
    {name: '', url: ''}
]

const username = ''
const password = ''

async function ensureDirectoryExists(directory) {
    try {
        await fs.access(directory);
    } catch (error) {
        await fs.mkdir(directory, { recursive: true });
    }
}

async function takeScreenshotWithLogin(url, username, password, outputName) {
    const browser = await puppeteer.launch({ headless: false, ignoreHTTPSErrors: true });

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(url);

    const usernameInput = await page.$('input[name="username"]');
    const passwordInput = await page.$('input[name="password"]');
    const loginButton = await page.$('button.btn.btn-large.p-x-2.btn-inverse');

    if (usernameInput && passwordInput && loginButton) {
        await usernameInput.type(username);
        await passwordInput.type(password);

        await loginButton.click();
    } else {
        console.log('Username, password, or login button not found');
        await browser.close();
        return;
    }

    await page.waitForNavigation();

    const firstButton = await page.$('#details-button');
    if (firstButton) {
        await firstButton.click();
    } else {
        console.log('First button not found');
    }

    const secondButton = await page.$('#details-button');
    if (secondButton) {
        await secondButton.click();
    } else {
        console.log('Second button not found');
    }

    const defaultImagesFolder = path.join(os.homedir(), 'Pictures');
    const fullOutputPath = path.join(defaultImagesFolder);

    await ensureDirectoryExists(fullOutputPath);

    const screenshotPath = path.join(fullOutputPath, `${outputName}.png`);

    await page.screenshot({ path: screenshotPath });

    await browser.close();

    console.log(`Screenshot saved at ${screenshotPath}`);
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
        readline.question('Enter your choice (only numbers): ', (input) => {
            readline.close();
            resolve(parseInt(input));
        });
    });
}

run();
