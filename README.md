
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

javascriptCopy code

`// Ejecutar automatización para todos los enlaces sin intervención del usuario
async function run() {
    for (const link of linksToVisit) {
        await takeScreenshotWithLogin(link.url, username, password, link.name);
    }
}

run();` 

## Inicio Rápido

1.  **Clona este repositorio.**
2.  **Instala Node.js y npm si aún no están instalados.**
3.  **Instala dependencias utilizando `npm install`.**
4.  **Actualiza variables de configuración como `username`, `password` y `linksToVisit` en los scripts.**
5.  **Ejecuta un script utilizando `node script_name.js`.**

## Estructura del Código

### Función `takeScreenshotWithLogin`

La función `takeScreenshotWithLogin` captura una captura de pantalla después de iniciar sesión en una URL especificada. Personaliza la función ajustando los siguientes parámetros:

-   `url`: La URL objetivo para iniciar sesión y capturar una captura de pantalla.
-   `username`: Tu nombre de usuario.
-   `password`: Tu contraseña.
-   `outputName`: El nombre deseado para la captura de pantalla de salida.

Ajusta los tiempos de espera, los selectores y el manejo de errores según el comportamiento específico de tu aplicación.

### Función `run`

La función `run` proporciona una interfaz de usuario para elegir y ejecutar tareas. Personaliza la función modificando la matriz `linkstovisit` con tus enlaces específicos.

### Manejo de Entrada de Usuario

Modifica el mensaje de solicitud y las condiciones de validación en la función `getUserInput` según tus preferencias.

### Ejecución

Ejecuta el script usando `node script_name.js`. Sigue las indicaciones para elegir un enlace o ejecutar todos los enlaces.

Siéntete libre de explorar y adaptar los scripts para tu caso de uso específico. Si encuentras problemas o tienes sugerencias, abre un problema o envía una solicitud de extracción.

# English 
# Automation Scripts

This repository contains Node.js scripts for automating tasks in various systems. Each script is designed with a modular approach for easy readability and maintenance.

## [](https://github.com/EdgeOfLoftiness/Checklist-scripts/tree/7d6b183f3e1c0766b5091f3b54203082af5949eb#scripts)Scripts

-   **Oracle Script**:  [IOracle/oracle_script.js](https://github.com/EdgeOfLoftiness/Checklist-scripts/blob/7d6b183f3e1c0766b5091f3b54203082af5949eb/oracle_script.js)  - Automation tasks in Oracle.
-   **Enterprise Manager Script**:  [Enterprise_manager/enterprise_manager_script.js](https://github.com/EdgeOfLoftiness/Checklist-scripts/blob/7d6b183f3e1c0766b5091f3b54203082af5949eb/enterprise_manager_script.js)  - Automation tasks in Oracle Enterprise Manager.
-   **Zabbix Script**:  [Zabbix/zabbix_script.js](https://github.com/EdgeOfLoftiness/Checklist-scripts/blob/7d6b183f3e1c0766b5091f3b54203082af5949eb/zabbix_script.js)  - Automation tasks in Zabbix.
-   **Kibana Script**:  [Kibana/kibana_script.js](https://github.com/EdgeOfLoftiness/Checklist-scripts/blob/7d6b183f3e1c0766b5091f3b54203082af5949eb/kibana_script.js)  - Automation tasks in Kibana.
-   **Grafana Script**:  [Grafana/grafana_script.js](https://github.com/EdgeOfLoftiness/Checklist-scripts/blob/7d6b183f3e1c0766b5091f3b54203082af5949eb/grafana_script.js)  - Automation tasks in Grafana.
-   **Graylog Script**:  [Graylog/graylog_script.js](https://github.com/EdgeOfLoftiness/Checklist-scripts/blob/7d6b183f3e1c0766b5091f3b54203082af5949eb/graylog_script.js)  - Automation tasks in Graylog.

## [](https://github.com/EdgeOfLoftiness/Checklist-scripts/tree/7d6b183f3e1c0766b5091f3b54203082af5949eb#code-structure)Code Structure

All scripts follow a consistent coding style. The core functionality is encapsulated in the  `takeScreenshotWithLogin`  function, which handles login and screenshot capture. The  `run`  function is user-friendly for script execution.

Example of the modified  `run`  function:

// Execute automation for all links without user input
async function run() {
    for (const link of linksToVisit) {
        await takeScreenshotWithLogin(link.url, username, password, link.name);
    }
}

run();

## [](https://github.com/EdgeOfLoftiness/Checklist-scripts/tree/7d6b183f3e1c0766b5091f3b54203082af5949eb#getting-started)Getting Started

1.  **Clone this repository.**
2.  **Install Node.js and npm if not already installed.**
3.  **Install dependencies using  `npm install`.**
4.  **Update configuration variables such as  `username`,  `password`, and  `linksToVisit`  in the scripts.**
5.  **Run a script using  `node script_name.js`.**
