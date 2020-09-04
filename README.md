# SPA Cli-Buefy
Proyecto de estudio para implementar **Buefy** como Framework CSS para Vue, adicionalmente el proyecto ha sido creado
utilizando **Vue-Cli**.

## Proceso de creación del proyecto
Para crear el proyecto se ejecutó:
1. Creación del proyecto con Vue-cli:
    ```
    vue create cli-buefy
    ```
    Seleccnionada la configuración por defecto
2. Instalación de **Buefy**:
    ```
    npm install -D buefy
    ```
3. Por último la ejecución del servidor para compilación de archivos en modo desarrollo:
    ```
    npm run serve
    ```

## Dependencias
Adicionalmente es necesario agregar:
1. **Fontawesome Free:**
    ```
    npm install -D @fortawesome/fontawesome-free
    ```
    Es necesario agregar a *main.js*:
    ```
    import '@fortawesome/fontawesome-free/css/all.css'
    Vue.use(Buefy, {
    defaultIconPack: 'fas',
    });
    ```
    De esta manera es posible usarlos iconos tanto a nivel de HTML como de los componentes Buefy


## Configuración del proyecto
1. Compiles and hot-reloads for development
    ```
    npm run serve
    ```
2. Compiles and minifies for production
    ```
    npm run build
    ```
3. Lints and fixes files
    ```
    npm run lint
    ```
