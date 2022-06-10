Este es el Front-End de la aplicación.

Cuenta con 2 rutas basicas: Auth y Admin.
    - Auth: Contiene el Login y el Register. Cualquier persona puede Acceder a esta ruta.
    - Admin: solo pueden acceder Usuarios autentificados. 

**Ruta Admin**
    - Cada usuario posee un Rol y podrá acceder a ciertas rutas dependiendo del Rol que tenga.
    - la aplicación se basa en la gestión de empresas, por ello la ruta Admin posee módulos que constituyen la base de la aplicación.
    - Esta ruta también contiene un apartado llamado 'Panel de usuario' o 'Panel de Administrador'. Dicho panel mostrará una        información u otra dependiendo del Rol del usuario.

**Panel de Usuario o Administrador** 
    - este panel varía en función del Rol que posea el usuario que accede a la Aplicación.
    - Si el usuario posee el Rol de Administrador al acceder al Panel se le mostrará una tabla con todos los usuarios que hay registrados en la aplicación. Pudiendo editarlos, eliminarlos y crear otros nuevos. Además de tener la posibilidad de asignar tareas a dichos usuarios.
    - Si el usuario posee el Rol de trabajador al acceder al panel se le mostrará una tabla con todas las tareas que el Administrador le ha asignado. Pero no podrá crear tareas, crear usuarios, editarlos ni eliminarlos.

**Funcionalidad de los módulos**

    - Los módulos nos permiten gestionar la base de datos de la empresa. Por ejemplo, en el módulo de inventario podremos crear, editar y eliminar Productos. 
    - Para poder realizar estas gestiones se han creado servicios que nos permiten hacer peticiones a la base de datos.

**Peticiones y Servicios**

    - Las peticiones a la base de datos se realizan mediante servicios en el archivo Api.Service.ts.
    - En caso de que la petción sea de tipo GET, la respuesta a estas peticiones es un texto en formato Json
      que consta de: Succes, Mensaje, Data;
        - Success: True o False dependiendo de si se ha realizado correctamente la petción.
        - Mensaje: Mensaje del servidor.
        - Data: Array que recoge los datos solicitados al servidor.
    - Este formato de respuesta se recrea en la interfaz Response.interface.ts que facilita la gestion de los datos
      proporcionados  por la respuesta del servicor.

**Protección de Rutas**

    - Las rutas esan protegidas mediante un Guard, que nos permite gestionar la seguridad de nuestra aplicaion.
    - Este guard nos permite gestionar quién puede acceder a nuestra aplicacion y que usuarios pueden acceder a ciertas rutas
      dependiendo del Rol que este posea.
    -Gracias a los interceptores podemos comprobar si el usuario posee el token de acceso que recibe al Loguearse.
        Este token es añadido a todas las peticiones a la Api en forma de Header mediante el Interceptor.
        Dicho Token de acceso es obligatorio para realizar cualquier petición y para visualizar la ruta /admin/, la cual muestra
        datos sensibles de la empresa.

**Acceso a la Api**

    -La Api se sube a un host local (localhost:8000) al momento de arrancar el Front-End. Para esto es necesario haber arrancado la Api de laravel previamente 
        mediante 'php artisan serve'
    -Se ha editado el package.json para que al momento de arrancar el Front-End con el comando 'ng serve' se ejecute un Script situado en el archivo proxy.conf.json.
        Dicho script contiene la configuración necesaria para alojar la Api en la ruta 'localhost:4200/api'.
    -Si accedemos al archivo api.service.ts (Archivo desde el cual se realizan todas las petciones a la Api) observaremos que la ruta básica de la aplicacion
        es 'localhost:4200/api'. Y desde esta se ramifican el resto de rutas que permiten realizar las disitintas llamadas a la Api.
    -EJEMPLO: Para obtener todos los usuarios haríamos un GET a la ruta 'localhost:4200/api/user'.

**Herramientas Utilizadas**

    - Guards
    - Interceptores
    - Tailwind.css
    - Observables
    - Interfaces
    - Inputs() y Outputs()
    - Peticiones Http a la Api 
    - Directivas ngIf(), ngFor(), FormGroup y FormContent etc.
    - Navegacion Routing.Module , router y routerLink.
    - Uso del LocalStorage.
