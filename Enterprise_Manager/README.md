# Puppeteer Multi-Login Screenshot Automation

This script extends the capabilities of the Puppeteer Screenshot Automation tool to handle scenarios where a second login is required. The script allows users to choose a link from a predefined list, log in with primary and secondary credentials, and capture a screenshot. Additionally, there's an option to capture screenshots for all links in the list.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Installation

1. **Clone Repository**: Clone or download the repository to your local machine.

    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**: Navigate to the project directory and install the required Node.js dependencies.

    ```bash
    cd <project-directory>
    npm install
    ```

3. **Update Script**: Open the script (`multi-login-screenshot.js`) in a text editor.

    - Update the `linksToVisit` array with the desired links and provide meaningful names and URLs.
    - Set the `username`, `password`, `secondUsername`, and `secondPassword` variables with the appropriate credentials.
    - Optionally, customize the file output location and format.

## Usage

1. **Run the Script**: Execute the script using the following command:

    ```bash
    npm start
    ```

2. **Choose a Link**: The script will prompt you to choose a link from the provided list. Enter the corresponding number and press Enter.

3. **View Output**: The script will capture a screenshot of the selected page and save it to the specified folder. The file will be named based on the link's name.

## Customization

- **Headless Mode**: By default, the script launches Puppeteer in headless mode. If you want to view the browser while the script runs, change the `headless` option to `false` in the `puppeteer.launch` function.

    ```javascript
    const browser = await puppeteer.launch({ headless: false });
    ```

- **Viewport Size**: Adjust the viewport size according to your preferences by modifying the `page.setViewport` function.

    ```javascript
    await page.setViewport({ width: 1920, height: 1080 });
    ```

- **Output Folder**: The screenshots are saved to the specified folder. You can change the `defaultImagesFolder` variable to a different path.

    ```javascript
    const defaultImagesFolder = path.join(os.homedir(), 'Pictures');
    ```
