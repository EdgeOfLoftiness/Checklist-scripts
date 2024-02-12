# Español
#   Scripts de Automatización

Este repositorio contiene scripts Node.js para automatizar tareas en varios sistemas. Cada script está diseñado con un enfoque modular para facilitar la legibilidad y el mantenimiento.

## Scripts

-   **Script de Oracle**: [Oracle/oracle_script.js](https://chat.openai.com/c/oracle_script.js) - Tareas de automatización en Oracle.
-   **Script de Enterprise Manager**: [Enterprise_manager/enterprise_manager_script.js](https://chat.openai.com/c/enterprise_manager_script.js) - Tareas de automatización en Oracle Enterprise Manager.
-   **Script de Zabbix**: [Zabbix/zabbix_script.js](https://chat.openai.com/c/zabbix_script.js) - Tareas de automatización en Zabbix.
-   **Script de Kibana**: [Kibana/kibana_script.js](https://chat.openai.com/c/kibana_script.js) - Tareas de automatización en Kibana.
-   **Script de Grafana**: [Grafana/grafana_script.js](https://chat.openai.com/c/grafana_script.js) - Tareas de automatización en Grafana.
-   **Script de Graylog**: [Graylog/graylog_script.js](https://chat.openai.com/c/graylog_script.js) - Tareas de automatización en Graylog.

## Estructura del Código

Todos los scripts siguen un estilo de codificación consistente. La funcionalidad principal está encapsulada en la función `takeScreenshotWithLogin`, que maneja el inicio de sesión y la captura de pantalla. La función `run` es amigable para la ejecución del script.

Ejemplo de la función `run` modificada:

```console
async function run() {
    for (const link of linksToVisit) {
        await takeScreenshotWithLogin(link.url, username, password, link.name);
    }
}

run();
```

## Inicio Rápido

1.  **Clona este repositorio.**
2.  **Instala Node.js y npm si aún no están instalados.**
3.  **Instala dependencias como puppeteer utilizando `npm install`.**
4.  **Actualiza variables de configuración como `username`, `password` y `linksToVisit` en los scripts.**
5.  **Ejecuta un script utilizando `node script_name.js`.**

## Estructura del Código

### Función `takeScreenshotWithLogin`

La función `takeScreenshotWithLogin` captura una captura de pantalla después de iniciar sesión en una URL especificada. Personaliza la función ajustando los siguientes parámetros:

- `url`:
Ajusta la URL según tu necesidad:

```console
const customUrl = '';
```

-   `username`:
 Ajusta el nombre de usuario según tu necesidad:

```console
const customUsername = '';
```

-   `password`: 
Tu contraseña. Ajusta la contraseña según tu necesidad:

```console
const customPassword = '';
```

-   `outputName`:
Ajusta el nombre de salida según tu necesidad:

```console
const customOutputName = '';
```

Ajusta los tiempos de espera, los selectores y el manejo de errores según el comportamiento específico de tu aplicación.

### Función `run`

La función `run` proporciona una interfaz de usuario para elegir y ejecutar tareas. Personaliza la función modificando la matriz `linkstovisit` con tus enlaces específicos.

### Manejo de Entrada de Usuario

Modifica el mensaje de solicitud y las condiciones de validación en la función `getUserInput` según tus preferencias.

### Ejecución

Ejecuta el script usando
 ```console
  node script_name.js
  ```
Sigue las indicaciones para elegir un enlace o ejecutar todos los enlaces.


# English

# Automation Scripts

This repository contains Node.js scripts for automating tasks in various systems. Each script is designed with a modular approach for easy readability and maintenance.

## Scripts

-   **Oracle Script**: [Oracle/oracle_script.js](https://chat.openai.com/c/oracle_script.js) - Automation tasks in Oracle.
-   **Enterprise Manager Script**: [Enterprise_manager/enterprise_manager_script.js](https://chat.openai.com/c/enterprise_manager_script.js) - Automation tasks in Oracle Enterprise Manager.
-   **Zabbix Script**: [Zabbix/zabbix_script.js](https://chat.openai.com/c/zabbix_script.js) - Automation tasks in Zabbix.
-   **Kibana Script**: [Kibana/kibana_script.js](https://chat.openai.com/c/kibana_script.js) - Automation tasks in Kibana.
-   **Grafana Script**: [Grafana/grafana_script.js](https://chat.openai.com/c/grafana_script.js) - Automation tasks in Grafana.
-   **Graylog Script**: [Graylog/graylog_script.js](https://chat.openai.com/c/graylog_script.js) - Automation tasks in Graylog.

## Code Structure

All scripts follow a consistent coding style. The core functionality is encapsulated in the `takeScreenshotWithLogin` function, which handles login and screenshot capture. The `run` function is user-friendly for script execution.

Example of the modified `run` function:

```console
async function run() {
    for (const link of linksToVisit) {
        await takeScreenshotWithLogin(link.url, username, password, link.name);
    }
}

run();
```

## Getting Started

1.  **Clone this repository.**
2.  **Install Node.js and npm if not already installed.**
3.  **Install dependencies using `npm install`.**
4.  **Update configuration variables such as `username`, `password`, and `linksToVisit` in the scripts.**
5.  **Run a script using `node script_name.js`.**

## Code Structure

### `takeScreenshotWithLogin` Function

The `takeScreenshotWithLogin` function captures a screenshot after logging into a specified URL. Customize the function by adjusting the following parameters:

-   `url`:Adjust the URL according to your needs:

```console
const customUrl = '';
``` 

-   `username`: Adjust the username according to your needs:

```console
const customUsername = '';
``` 

-   `password`: Adjust the password according to your needs:

```console 
const customPassword = '';
```

-   `outputName`: Adjust the output name according to your needs:

```console
const customOutputName = '';
``` 

Adjust the wait times, selectors, and error handling according to your specific application's behavior.

### `run` Function

The `run` function provides a user interface to choose and execute tasks. Personalize the function by modifying the `linkstovisit` array with your specific links.

### User Input Handling

Modify the prompt message and validation conditions in the `getUserInput` function to suit your preferences.

### Execution

Run the script using 
```console 
node script_name.js
```
Follow the prompts to choose a link or run all links.
