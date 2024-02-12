const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

const linkstovisit = [
    {name: '', url: ''}
]

const username = ''
const password = ''

async function ensuredirectoryexists(directory) {
    try {
        //comprueba si el directorio existe
        await fs.access(directory);
    } catch (error) {
        //si el directorio no existe lo crea (recursive=true asegura que se creen directorios padres)
        //tuve problemas por eso use recursive
        await fs.mkdir(directory, { recursive: true });
    }
}

//no tengo idea que hace ya, no debia ser tan largo
async function takescreenshotwithlogin(url, username, password, outputName) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    const waitfornetworkidle = page.waitForNavigation({ waitUntil: 'networkidle0' });

    try {
        await page.goto(url);

        // Add click event to the login button before entering credentials
        await page.waitForSelector('button#login');
        await page.click('button#login');
        await waitfornetworkidle;

        // Wait for the login form
        await page.waitForSelector('form[aria-label="Sign in"]');

        // Enter the credentials
        await page.$eval('#name', (element, username) => {
            element.value = username;
        }, username);

        await page.$eval('#password', (element, password) => {
            element.value = password;
        }, password);

        // Click the login button
        await page.waitForSelector('button#enter');
        await page.click('button#enter');
        await waitfornetworkidle;

        const redirectedURL = page.url();
        console.log(`Inicio de sesión en: ${redirectedURL}`);

        const selectedLink = linkstovisit.find(link => link.name === outputName);

        if (selectedLink) {

            await page.goto(selectedLink.url);

            //espera 500ms para tomar la imagen
            await page.waitForTimeout(500);

            //busca la carpeta de imagenes default del usuario
            const defaultImagesFolder = path.join(os.homedir(), 'Pictures');
            const fullOutputPath = path.join(defaultImagesFolder);

            //asegura que el directorio existe
            await ensuredirectoryexists(fullOutputPath);

            //crea la ruta de la imagen
            const screenshotPath = path.join(fullOutputPath, `${outputName}.png`);

            //guarda la iamgen en la ruta
            await page.screenshot({ path: screenshotPath });

            await browser.close();

            //imprime la ubicacion de la iamgen
            console.log(`Captura de pantalla guardada en ${screenshotPath}`);

            return redirectedURL;
        } else {
            console.error('Nombre de enlace no válido. Saliendo.');
            await browser.close();
            return null;
        }
    } catch (error) {
        console.error(`Error durante la captura de pantalla: ${error}`);
        return null;
    }
}


//ejecuta la funcion principal 
async function run() {
    console.log('elige un enlace para visitar:');
    //muestra las opcioens
    for (let i = 0; i < linkstovisit.length; i++) {
        console.log(`${i + 1}. ${linkstovisit[i].name}`);
    }
    console.log(`${linkstovisit.length + 1}. Run all links`);

    //toma el input del usuario
    const userinput = await getuserinput();

    //procesa el input del usuario
    if (userinput >= 1 && userinput <= linkstovisit.length) {
        const selectedlink = linkstovisit[userinput - 1];
        await takescreenshotwithlogin(selectedlink.url, username, password, selectedlink.name);
    } else if (userinput === linkstovisit.length + 1) {
        //ejecuta todos los enlaces
        for (const link of linkstovisit) {
            await takescreenshotwithlogin(link.url, username, password, link.name);
        }
    } else {
        console.log('opción no válida. saliendo.');
    }
}

//recibe el input del usuairo
async function getuserinput() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readline.question('ingresa tu elección (solo números): ', (input) => {
            readline.close();
            resolve(parseInt(input));
        });
    });
}


run();