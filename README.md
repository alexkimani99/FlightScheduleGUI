# FlightScheduleGUI

FlightScheduleGUI es la interfaz de usuario para el proyecto FlightScheduleSV, realizado con React. Este README proporciona una descripción general del proyecto, su estructura, requisitos del sistema, cómo instalar y configurar la aplicación, así como ejemplos de uso y cómo contribuir al proyecto.

## Contenido

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Requisitos del Sistema](#requisitos-del-sistema)
3. [Instalación y Configuración](#instalación-y-configuración)
4. [Despliegue](#despliegue)
5. [Estructura de Componentes](#estructura-de-componentes)
6. [Ejemplos de Uso](#ejemplos-de-uso)

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- **src**
  - **components**
    - `ArrivalList.js`: Contiene la lógica para la tabla de llegadas.
    - `ArrivalTable.js`: Pinta la tabla de llegadas.
    - `DepartureList.js`: Contiene la lógica para la tabla de salidas.
    - `DepartureTable.js`: Pinta la tabla de salidas.
  - **services**
    - `ArrivalService.js`: Servicio para operaciones relacionadas con llegadas.
    - `DepartureService.js`: Servicio para operaciones relacionadas con salidas.
  - `App.css`: Estilos globales de la aplicación.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada principal.
  - `index.css`: Estilos globales del documento.
  - `package.json`: Configuración del proyecto.
  - `package-lock.json`: Bloqueo de versiones de las dependencias.

## Requisitos del Sistema

Es necesario tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en la máquina.

## Instalación y Configuración

1. Navega hasta la carpeta raíz del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias:
   'npm install'.

- Para lanzar la aplicación en modo desarrollo, **npm start**.
La aplicación cargará en http://localhost:3000. Es importante mantener este puerto, ya que está habilitado de forma automática
el Cross-Origin Resource Sharing (CORS) para hacer llamadas a la API en el puerto 8080 del backend.

- Para crear una versión optimizada para producción, **npm run build**


## Estructura de Componentes
- ArrivalList.js y DepartureList.js: Contienen la lógica para las tablas de llegadas y salidas.
- ArrivalTable.js y DepartureTable.js: Pintan las tablas de llegadas y salidas, respectivamente.

## Ejemplos de uso 
La interfaz de usuario se integra con el backend FlightScheduleSV para realizar operaciones en las llegadas y salidas de vuelos.

