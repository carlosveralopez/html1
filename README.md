Esta es la documentacion de la API
*********************************************************

/////////// USUARIO //////////

El usuario contiene 5 campos : nombre, apellido, password, email e id_rol.
Las acciones que podemos realizar con el controlador del usuario son:
-Registrar un nuevo usuario con: nombre, password, email.
-Loguearnos en la aplicación con: nombre y password o email y password.
-Recibir un listado de todos los usuarios.
-Recibir los datos de un usuario en concreto con si ID.
-Recibir el rol asignado a un usuario a partir de su ID.


/////////// CUERPO DE LA APLICACION ///////////

La aplicacion se basa en gestionar una empresa como un ERP, actualmente hay un numero limitado de modulos.
Entre ellos:
-Inventario: Conformado por los modelos de Categorias y Productos.
-Facturacion: Conformado por los modelos Line y Invoice.
-Citas: Conformado por el modelo Date.
-Tareas: Conformado por el modelo Tasks.

Además los módulos de Inventario y facturacíón se complementan entre sí para poder crear facturas de productos.

/////////// MODULOS EN PROFUNDIDAD////////////

-Inventario:
    Gestiona el inventario de la empresa.
    Se divide en 2 modelos:
         Productos: nombre, precio, descripcion, cantidad, id_categoria
         Categoria: nombre, descripción ***(Permite clasificar y dividir los productos en categorias)***

-Facturacion:
    Gestiona el apartado de la facturación de la empresa.
    Se divide en 2 modelos:
         Invoice: hora, fecha, id_empresa ***(Información básica de la factura)***
         Line: Invoice_id, product_id, catidad ***(Son los datos del producto que se va a facturar)***

-Citas:
    Gestiona el apartado de las Citas de la empresa.
    Se divide en 1 modelo:
         Date: hora, fecha, id_trabajador, id_cliente ***(Información básica de la Cita)***

-Tareas:
    Gestiona las tareas asignadas a los trabajadores por sus superiores.
    Se divide en 1 modelo:
         Tasks: hora, fecha, id_usuario, asunto, descripcion 

///////// MISCELANEA /////////

La Aplicación también cuenta con funcionalidades basicas como clasificar a los Usuarios y permitir enviar mensajes entre ellos.

Los Usuarios se clasifican a través del modelo ROL:

-Rol:
    Divide a los usuarios en roles para clasificarlos según el grado de permisos que pueden tenr en la aplicación.
    Se conforma por 1 modelo:
         Role: Rol ***(Es el rol al que hace referencia ID_rol del modelo Usuario)***

Los Usuarios se pueden enviar mensajes a través del modelo Messages.

-Mensajes:
    Se conforma por 1 modelo:
         Messages: mensaje, fecha, hora, leido, id_user_emisro, id_user_receptor
         
         

