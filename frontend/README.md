# Proyecto Web: Tienda de Libros en Línea

Este proyecto desarrollado en angular consiste en una **tienda de libros en línea** donde los usuarios pueden explorar, buscar y agregar libros al carrito de compra. Además, proporciona una experiencia sencilla para los mismos usuarios al permitirles ver un análisis detallado de los libros leídos, autores y generos en backoffice.

# Requisitos Mínimos
Modifique la estructura de carpetas para que este mas agrupadas por grupos.
## 1. Backoffice (Panel de Administración)
- Los datos de la base de datos se inicializan con el proyecto, pero la base de datos debe estar creada previamente llamandose "tienda".
- El backoffice debe contar con las siguientes secciones:
  - {🟢control-panel} Página principal: Vista general de administración.
    - Los datos de los graficos son sacados de la base de datos
    - Como añadido si se le da a un div de los de arriba sale un modal con la informacion correspondiente (libros, nºgeneros, total sumando el coste de los libros y nº de autores)
  
  - {🟡profile} Página de perfil: Información del usuario y opción para modificar contraseña.
    - Se muestra informacion basica del usuario
    - No consegui que se pudiera modificar los datos pero el intento de logica esta hecho, ademas el modal de modificar contraseña funciona

  - {🟡my-products} Página de ver mis productos: Listado de productos creados por el usuario, con opción para añadir y eliminar productos.
    - Se muestra todos los libros con el id del usuario con la sesion iniciada
    - Se puede borrar libros de la base de datos correctamente
    - Pero no se pueden crear libros nuevos, igualmente el intento de logica esta hecho y el modal funciona correctamente

## 2. Página del Cliente

- El sistema debe contar con una interfaz para los clientes, con las siguientes páginas:
  - {🟢Home} Página principal: Home de la tienda.
    - Se ven los libros mas populares

  - {🟢Login} Página de login: Ingreso de usuarios.
  - Hay un pequeño error, cuando se inicia con un usuario con role CLIENT, se le adjudica el token bien, pero hay que reiniciar la pagina para que se refleje
  - Con la ayuda del guard creado se evita el acceso a la pagina de backoffice a los que no tienen role ADMIN, estos son redireccionados a home

  - {🟢Registro} Página de registro: Creación de cuenta.
    - Se registra un usuario en la base de datos y aparece un boton para iniciar sesion

  - {🟢Tienda} Página de ver productos: Listado de productos disponibles.
    - Se ven todos los libros en la base de datos
    - Si se da click en un libro se abre un modal (otro componente) con la informacion del libro,

  - {🟢Info-Show} Página de descripción del producto: Información detallada de cada producto.
    - Este es el modal que se abre cuando se da click en un libro de la tienda
    - Ademas ofrece la opcion de añadirlo al carrito (En el carrito del header se ve reflejado cuantos libros hay en el carrito)

  - {🟢Carrito-->🟢pay} Página de checkout: Proceso de compra, incluyendo dirección de envío y pago con tarjeta de crédito u otros métodos.
    - En el carrito se ven reflejados todos los productos que hay en el.
    - Ofrece la opcion de eliminar del carrito, vaciar el carrito completamente o ir a pagar
## 3. Requisitos Técnicos Adicionales

  - {🟢} Guards: Además de los guards explicados en clase, se debe añadir un guard que impida el acceso al backoffice a los clientes con el rol "CLIENT". Este rol está almacenado en sessionStorage (visto en la última clase).
  - {🟡} Estructura y modularidad: Se valorará el uso de una estructura bien organizada y modular en Angular.
  - {🟢} Diseño y experiencia de usuario (UX/UI): Se tendrá en cuenta la interfaz de la tienda para evaluar la navegabilidad y la experiencia del usuario.
  - {🟡} Responsive Design: La tienda debe adaptarse correctamente a diferentes tamaños de pantalla.

## 4. Evaluación del Backend (Opcional)
  - Modifique bastantes cosas y cree nuevos archivos para qyue pudiera ser funcional con la idea que tenia