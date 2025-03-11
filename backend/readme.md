# Pasos del Backend

- 1. Configurar la B.D MySQL en aplicattion properties y tambien JPA.
- 2. Crear entidades User, UserInfo, Role, Product, Order y OrderItem. ( En Carpeta Models)
- 3. Crear repositorios de las entidades previamente creadas. ( En carpeta Repositories )
- 4. Crear servicios ( En carpeta Services ) y controladores para poder acceder tener logica de negocio y posteriormente poder acceder en el Controller.
- 5. Configurar Segurity con JWT Tokens.
- 6. Seeder con DataInitializer para meter inserts a la bd automaticamente ( 2 Users y 5 Productos )

# He realizado en el BACKEND -> DataLoader ( seeder ), Termine el resto de Repositorios,Services y Controllers

# Para utilizar tener un usuario en phpmyadmin ,nombre camilo y contra 123456 , posteriormente tener Apache y MySQL activado y crear una base de datos llamada tienda y posteriormente correr TiendaOnlineApplication.java .

# Endpoints -> siempre `http://localhost:8080/api` delante "/users/login", "/users", "/users/register","/users/check-token", "/products/

# Con `http://localhost:8080/api/products` muestro todos los productos previamente insertados.
