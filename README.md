# Automation Scripts

This repository contains Node.js scripts for automating tasks in various systems. Each script is designed with a modular approach for easy readability and maintenance.

## Scripts

- **Oracle Script**: [oracle_script.js](oracle_script.js) - Automation tasks in Oracle.
- **Enterprise Manager Script**: [enterprise_manager_script.js](enterprise_manager_script.js) - Automation tasks in Oracle Enterprise Manager.
- **Zabbix Script**: [zabbix_script.js](zabbix_script.js) - Automation tasks in Zabbix.
- **Kibana Script**: [kibana_script.js](kibana_script.js) - Automation tasks in Kibana.
- **Grafana Script**: [grafana_script.js](grafana_script.js) - Automation tasks in Grafana.
- **Graylog Script**: [graylog_script.js](graylog_script.js) - Automation tasks in Graylog.

## Code Structure

All scripts follow a consistent coding style. The core functionality is encapsulated in the `takeScreenshotWithLogin` function, which handles login and screenshot capture. The `run` function is user-friendly for script execution.

Example of the modified `run` function:

```javascript

// Execute automation for all links without user input
async function run() {
    for (const link of linksToVisit) {
        await takeScreenshotWithLogin(link.url, username, password, link.name);
    }
}

run();
```

## Getting Started

1. **Clone this repository.**
2. **Install Node.js and npm if not already installed.**
3. **Install dependencies using `npm install`.**
4. **Update configuration variables such as `username`, `password`, and `linksToVisit` in the scripts.**
5. **Run a script using `node script_name.js`.**

## Code Structure

### `takeScreenshotWithLogin` Function

The `takeScreenshotWithLogin` function captures a screenshot after logging into a specified URL. Customize the function by adjusting the following parameters:

- `url`: The target URL to log in and capture a screenshot.
- `username`: Your login username.
- `password`: Your login password.
- `outputName`: The desired name for the output screenshot.

Adjust the wait times, selectors, and error handling according to your specific application's behavior.

### `run` Function

The `run` function provides a user interface to choose and execute tasks. Personalize the function by modifying the `linkstovisit` array with your specific links.

### User Input Handling

Modify the prompt message and validation conditions in the `getUserInput` function to suit your preferences.

### Execution

Run the script using `node script_name.js`. Follow the prompts to choose a link or run all links.

Feel free to explore and adapt the scripts for your specific use case. If you encounter issues or have suggestions, please open an issue or submit a pull request.
