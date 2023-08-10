# Fashionlike - Backend

Este es el backend de la aplicación Fashionlike, una aplicación web que permite a los usuarios compartir publicaciones de moda. Este backend está desarrollado utilizando Node.js y Express, y utiliza una base de datos mysqlQL para almacenar la información de los usuarios y sus publicaciones.

## Cómo instalar la aplicación

Para instalar la aplicación, primero debes clonar este repositorio en tu máquina local. A continuación, debes instalar todas las dependencias necesarias ejecutando el siguiente comando en la terminal:

***npm install***

Este comando instalará todas las dependencias necesarias para ejecutar el backend de la aplicación.

## Cómo configurar la base de datos

Para configurar la base de datos MySQL, primero debes crear una base de datos en tu servidor de MySQL. A continuación, debes configurar las variables de entorno necesarias para que el backend pueda conectarse a tu base de datos. Para hacer esto, crea un archivo `.env` en la raíz de tu proyecto y configura las siguientes variables de entorno:

 - DB_HOST=<tu_host_de_mysql>
 - DB_PORT=<tu_puerto_de_mysql>
 - DB_NAME=<el_nombre_de_tu_base_de_datos>
 - DB_USER=<tu_usuario_de_mysql>
 - DB_PASSWORD=<tu_contraseña_de_mysql>

## Uso de la API de Google Drive

Este backend utiliza la API de Google Drive para permitir a los usuarios guardar sus publicaciones en una cuenta de Google Drive. Para utilizar esta funcionalidad, necesitas obtener las credenciales de la API de Google Drive siguiendo los pasos que se describen en la sección anterior.

Una vez que hayas obtenido las credenciales, debes configurar las variables de entorno necesarias para que el backend pueda conectarse a la API de Google Drive. Para hacer esto, crea un archivo `.env` en la raíz de tu proyecto y configura las siguientes variables de entorno:

 - GOOGLE_CLIENT_ID=<tu_client_id_de_google_drive>
 - GOOGLE_CLIENT_SECRET=<tu_client_secret_de_google_drive>
 - GOOGLE_REDIRECT_URI=<tu_uri_de_redireccion_de_google_drive>

Además, debes habilitar la API de Google Drive en la consola de desarrolladores de Google y conceder permisos de acceso a la cuenta de Google Drive en la que deseas guardar las publicaciones.

Una vez que hayas configurado las variables de entorno y concedido los permisos necesarios, podrás utilizar la API de Google Drive para guardar las publicaciones de los usuarios en su cuenta de Google Drive. Si necesitas más información sobre cómo utilizar la API de Google Drive, consulta la documentación oficial de Google Drive API que se proporciona en el sitio web de Google.

## Construcción del proyecto

Para construir el backend de la aplicación con Node.js y Babel, utiliza el siguiente comando:

***npm run build***

Este comando compila los archivos de JavaScript de tu proyecto en la carpeta `dist/` utilizando Babel. La carpeta `dist/` es la carpeta que se utiliza para desplegar la aplicación en producción.

Recuerda que para utilizar este comando, debes tener Babel instalado en tu proyecto y configurado correctamente. Si necesitas ayuda para instalar y configurar Babel, consulta la documentación oficial de Babel que se proporciona en su sitio web.


## Cómo ejecutar la aplicación

Para ejecutar el backend de la aplicación, debes ejecutar el siguiente comando en la terminal:

***npm start***


Este comando iniciará el servidor de Node.js y podrás acceder al backend de la aplicación a través de tu navegador web o utilizando una herramienta de desarrollo de API como Postman.

## Cómo utilizar la aplicación

El backend de la aplicación Fashionlike proporciona una API REST que permite a los usuarios realizar las siguientes acciones:

- Registrarse como usuario
- Iniciar sesión como usuario
- Obtener información sobre el usuario actualmente autenticado
- Obtener información sobre las publicaciones de otros usuarios
- Crear nuevas publicaciones
- Editar y eliminar publicaciones propias

Para obtener más información sobre cómo utilizar la API, consulta la documentación oficial de la API que se proporciona en el repositorio de GitHub.

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Sequelize
- Google Drive API
