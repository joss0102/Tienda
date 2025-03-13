# Proyecto Web: Tienda de Libros en Línea

Este proyecto desarrollado en angular consiste en una **tienda de libros en línea** donde los usuarios pueden explorar, buscar y agregar libros al carrito de compra. Además, proporciona una experiencia sencilla para los mismos usuarios al permitirles ver un análisis detallado de los libros leídos, autores y generos.

## Estructura de la Página Web

### 1. Sección del Usuario 
Se entra nada mas entrar en la pagina web.
Esta sección está diseñada para proporcionar una experiencia de compra fluida y fácil de navegar.

- **Inicio**
  - Presentación de la tienda y los libros más populares.
  - Sección de búsqueda donde los usuarios pueden buscar libros por género..
  
- **Tienda**
  - Muestra una lista de libros disponibles en la tienda.
  - Los usuarios pueden agregar libros a su carrito directamente desde esta sección.

- **Carrito**
  - Visualización del contenido del carrito de compra, donde los usuarios pueden revisar los libros seleccionados.
  - Opciones para eliminar elementos del carrito o proceder al pago.
- **Perfil de usuario**
  - 

### 2. Sección Administrador
se entra en esta seccion iniciando sesion o con /app
Los administradores pueden gestionar y analizar los libros leídos por los usuarios.

- **Análisis de libros leídos**
  - Visualización de estadísticas sobre los libros que los usuarios han leído, cómo han interactuado con ellos, y qué libros son los más populares.



## Requisitos Mínimos

### 1. Backoffice (Panel de Administración)
- El backoffice debe contar con las siguientes secciones:
  - [🟡control-panel] Página principal: Vista general de administración.
  - [🔴profile] Página de perfil: Información del usuario y opción para modificar contraseña.
  - [🔴my-products] Página de ver mis productos: Listado de productos creados por el usuario, con opción para añadir y eliminar productos.

### 2. Página del Cliente

- El sistema debe contar con una interfaz para los clientes, con las siguientes páginas:
  - [🟢Home] Página principal: Home de la tienda.
  - [🟢Login] Página de login: Ingreso de usuarios.
  - [🔴Registro] Página de registro: Creación de cuenta.
  - [🟢Tienda] Página de ver productos: Listado de productos disponibles.
  - [🟢Info-Show] Página de descripción del producto: Información detallada de cada producto.
  - [🟢Carrito-->🟢pay] Página de checkout: Proceso de compra, incluyendo dirección de envío y pago con tarjeta de crédito u otros métodos.
### 3. Requisitos Técnicos Adicionales

  - [🔴] Guards: Además de los guards explicados en clase, se debe añadir un guard que impida el acceso al backoffice a los clientes con el rol "CLIENT". Este rol está almacenado en sessionStorage (visto en la última clase).
  - [🟡] Estructura y modularidad: Se valorará el uso de una estructura bien organizada y modular en Angular.
  - [🟢] Diseño y experiencia de usuario (UX/UI): Se tendrá en cuenta la interfaz de la tienda para evaluar la navegabilidad y la experiencia del usuario.
  - [🟡] Responsive Design: La tienda debe adaptarse correctamente a diferentes tamaños de pantalla.