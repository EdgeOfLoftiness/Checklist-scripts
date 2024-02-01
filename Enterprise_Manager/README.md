
# Automated Screenshot Tool

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Customization](#customization)

## Overview

This script uses Puppeteer, a Node library for controlling headless browsers, to automate the process of taking screenshots from specified web pages after logging in. The script allows users to choose a link from a predefined list, log in with credentials, and capture a screenshot. Additionally, there is an option to capture screenshots for all links in the list.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Setup

1. **Clone Repository**: Clone or download the repository to your local machine.

    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**: Navigate to the project directory and install the required Node.js dependencies.

    ```bash
    cd <project-directory>
    npm install
    ```

## Usage

1. **Update Links and Credentials**: Open the script (`screenshot-tool.js`) in a text editor and update the `linksToVisit` array with the desired links and the `username` and `password` variables with the appropriate credentials.

2. **Run the Script**: Execute the script using the following command:

    ```bash
    npm start
    ```

3. **Choose a Link**: The script will prompt you to choose a link from the provided list. Enter the corresponding number and press Enter.

4. **View Output**: The script will capture a screenshot of the selected page and save it to the default "Pictures" folder on your machine. The file will be named based on the link's name.

## Customization

- **Headless Mode**: By default, the script launches Puppeteer in headless mode. If you want to view the browser while the script runs, change the `headless` option to `false` in the `puppeteer.launch` function.

    ```javascript
    const browser = await puppeteer.launch({ headless: false });
    ```

- **Viewport Size**: Adjust the viewport size according to your preferences by modifying the `page.setViewport` function.

    ```javascript
    await page.setViewport({ width: 1920, height: 1080 });
    ```

- **Output Folder**: The screenshots are saved to the "Pictures" folder by default. You can change the `defaultImagesFolder` variable to a different path.

    ```javascript
    const defaultImagesFolder = path.join(os.homedir(), 'Pictures');
    ```
