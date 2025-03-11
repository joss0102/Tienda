package com.tienda.app.seeders;

import com.tienda.app.enums.Currency;
import com.tienda.app.models.Product;
import com.tienda.app.models.User;
import com.tienda.app.repositories.ProductRepository;
import com.tienda.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class ProductsDataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;  // Inyectamos el UserRepository para acceder a los usuarios

    @Override
    public void run(String... args) throws Exception {

        // Obtener todos los usuarios
        List<User> users = userRepository.findAll();

        if (users.isEmpty()) {
            throw new Exception("No se encontraron usuarios");
        }

        // Usamos el primer usuario de la lista como vendedor
        User user1 = users.get(0);
        User user2 = users.get(1);

        // Insertar productos (TOG)
        Product product1 = new Product();
        product1.setTitle("Trono de cristal");
        product1.setAuthor("Sarah J. Maas");
        product1.setDescription("");
        product1.setPrice(BigDecimal.valueOf(22.99));
        product1.setTax(21.0);
        product1.setCurrency(Currency.USD);
        product1.setSeller(user1);
        product1.setPopularity(3);
        productRepository.save(product1);

        Product product2 = new Product();
        product2.setTitle("Corona de medianoche");
        product2.setAuthor("Sarah J. Maas");
        product2.setDescription("Romance y misterio");
        product2.setPrice(BigDecimal.valueOf(22.50));
        product2.setTax(21.0);
        product2.setCurrency(Currency.USD);
        product2.setSeller(user1);
        product2.setPopularity(3);
        productRepository.save(product2);

        Product product3 = new Product();
        product3.setTitle("La espada de la asesina");
        product3.setAuthor("Sarah J. Maas");
        product3.setDescription("Romance y misterio");
        product3.setPrice(BigDecimal.valueOf(23.99));
        product3.setTax(21.0);
        product3.setCurrency(Currency.USD);
        product3.setSeller(user1);
        product3.setPopularity(4);
        productRepository.save(product3);

        Product product4 = new Product();
        product4.setTitle("Heredera de fuego");
        product4.setAuthor("Sarah J. Maas");
        product4.setDescription("Fantaía y romance");
        product4.setPrice(BigDecimal.valueOf(24.99));
        product4.setTax(21.0);
        product4.setCurrency(Currency.USD);
        product4.setSeller(user2);
        product4.setPopularity(6);
        productRepository.save(product4);

        Product product5 = new Product();
        product5.setTitle("Reina de sombras");
        product5.setAuthor("Sarah J. Maas");
        product5.setDescription("Fantaía y romance");
        product5.setPrice(BigDecimal.valueOf(25.99));
        product5.setTax(21.0);
        product5.setCurrency(Currency.USD);
        product5.setSeller(user2);
        product5.setPopularity(7);
        productRepository.save(product5);

        Product product6 = new Product();
        product6.setTitle("Imperio de tormentas");
        product6.setAuthor("Sarah J. Maas");
        product6.setDescription("Fantaía y romance");
        product6.setPrice(BigDecimal.valueOf(26.99));
        product6.setTax(21.0);
        product6.setCurrency(Currency.USD);
        product6.setSeller(user2);
        product6.setPopularity(8);
        productRepository.save(product6);

        Product product7 = new Product();
        product7.setTitle("Torre del alba");
        product7.setAuthor("Sarah J. Maas");
        product7.setDescription("Fantaía y romance");
        product7.setPrice(BigDecimal.valueOf(26.99));
        product7.setTax(21.0);
        product7.setCurrency(Currency.USD);
        product7.setSeller(user2);
        product7.setPopularity(5);
        productRepository.save(product7);

        Product product8 = new Product();
        product8.setTitle("Reino de cenizas");
        product8.setAuthor("Sarah J. Maas");
        product8.setDescription("Aelin lo ha arriesgado todo para salvar a su gente, pero el coste ha sido tremendo. Encerrada dentro de un ataúd de hierro por la reina de las hadas, Aelin deberá usar su inquebrantable voluntad para soportar meses de tortura. Ceder ante Maeve condenaría a aquellos a los que quiere, y por eso resiste, pero le cuesta más cada día que pasa… ");
        product8.setPrice(BigDecimal.valueOf(27.99));
        product8.setTax(21.0);
        product8.setCurrency(Currency.USD);
        product8.setSeller(user2);
        product8.setPopularity(10);
        productRepository.save(product8);

        // Insertar productos (alas de sangre)
        Product product9 = new Product();
        product9.setTitle("Alas de Sangre");
        product9.setAuthor("Rebecca Yarros");
        product9.setDescription("Dragones");
        product9.setPrice(BigDecimal.valueOf(21.99));
        product9.setTax(21.0);
        product9.setCurrency(Currency.USD);
        product9.setSeller(user1);
        product9.setPopularity(6);
        productRepository.save(product9);

        Product product10 = new Product();
        product10.setTitle("Alas de Hierro");
        product10.setAuthor("Rebecca Yarros");
        product10.setDescription("Dragones");
        product10.setPrice(BigDecimal.valueOf(21.99));
        product10.setTax(21.0);
        product10.setCurrency(Currency.USD);
        product10.setSeller(user1);
        product10.setPopularity(7);
        productRepository.save(product10);

        Product product11 = new Product();
        product11.setTitle("Alas de Onix");
        product11.setAuthor("Rebecca Yarros");
        product11.setDescription("Dragones");
        product11.setPrice(BigDecimal.valueOf(21.99));
        product11.setTax(21.0);
        product11.setCurrency(Currency.USD);
        product11.setSeller(user1);
        product11.setPopularity(6);
        productRepository.save(product11);

        // Insertar productos (imperio del vampiro)
        Product product12 = new Product();
        product12.setTitle("El imperio del vampiro");
        product12.setAuthor("Jay Kristoff");
        product12.setDescription("Vampiros");
        product12.setPrice(BigDecimal.valueOf(22.99));
        product12.setTax(21.0);
        product12.setCurrency(Currency.USD);
        product12.setSeller(user2);
        product12.setPopularity(7);
        productRepository.save(product12);

        Product product13 = new Product();
        product13.setTitle("El imperio de los condenados");
        product13.setAuthor("Jay Kristoff");
        product13.setDescription("Vampiros");
        product13.setPrice(BigDecimal.valueOf(21.99));
        product13.setTax(21.0);
        product13.setCurrency(Currency.USD);
        product13.setSeller(user2);
        product13.setPopularity(7);
        productRepository.save(product13);

        // Insertar productos (ACOTAR)
        Product product14 = new Product();
        product14.setTitle("Una corte de rosas y espinas");
        product14.setAuthor("Lauren Roberts");
        product14.setDescription("Fantaía y romance");
        product14.setPrice(BigDecimal.valueOf(15.99));
        product14.setTax(21.0);
        product14.setCurrency(Currency.USD);
        product14.setSeller(user2);
        product14.setPopularity(7);
        productRepository.save(product14);

        Product product15 = new Product();
        product15.setTitle("Una corte de niebla y furia");
        product15.setAuthor("Lauren Roberts");
        product15.setDescription("Fantaía y romance");
        product15.setPrice(BigDecimal.valueOf(16.99));
        product15.setTax(21.0);
        product15.setCurrency(Currency.USD);
        product15.setSeller(user2);
        product15.setPopularity(7);
        productRepository.save(product15);

        Product product16 = new Product();
        product16.setTitle("Una corte de alas y ruina");
        product16.setAuthor("Lauren Roberts");
        product16.setDescription("Fantaía y romance");
        product16.setPrice(BigDecimal.valueOf(17.99));
        product16.setTax(21.0);
        product16.setCurrency(Currency.USD);
        product16.setSeller(user2);
        product16.setPopularity(7);
        productRepository.save(product16);

        Product product17 = new Product();
        product17.setTitle("Una corte de hielo y estrellas");
        product17.setAuthor("Lauren Roberts");
        product17.setDescription("Fantaía y romance");
        product17.setPrice(BigDecimal.valueOf(16.99));
        product17.setTax(21.0);
        product17.setCurrency(Currency.USD);
        product17.setSeller(user2);
        product17.setPopularity(7);
        productRepository.save(product17);

        Product product18 = new Product();
        product18.setTitle("Una corte de llamas plateadas");
        product18.setAuthor("Lauren Roberts");
        product18.setDescription("Fantaía y romance");
        product18.setPrice(BigDecimal.valueOf(18.99));
        product18.setTax(21.0);
        product18.setCurrency(Currency.USD);
        product18.setSeller(user2);
        product18.setPopularity(7);
        productRepository.save(product18);

        // Insertar productos (ACOTAR)
        Product product19 = new Product();
        product19.setTitle("De sangre y cenizas");
        product19.setAuthor("Jennifer Armentrout");
        product19.setDescription("Dioses y monstruos");
        product19.setPrice(BigDecimal.valueOf(18.99));
        product19.setTax(21.0);
        product19.setCurrency(Currency.USD);
        product19.setSeller(user1);
        product19.setPopularity(7);
        productRepository.save(product19);

        Product product20 = new Product();
        product20.setTitle("La guerra de las dos reinas");
        product20.setAuthor("Jennifer Armentrout");
        product20.setDescription("Dioses y monstruos");
        product20.setPrice(BigDecimal.valueOf(18.99));
        product20.setTax(21.0);
        product20.setCurrency(Currency.USD);
        product20.setSeller(user1);
        product20.setPopularity(7);
        productRepository.save(product20);

        Product product21 = new Product();
        product21.setTitle("Un alma de ceniza y sangre");
        product21.setAuthor("Jennifer Armentrout");
        product21.setDescription("Dioses y monstruos");
        product21.setPrice(BigDecimal.valueOf(19.99));
        product21.setTax(21.0);
        product21.setCurrency(Currency.USD);
        product21.setSeller(user1);
        product21.setPopularity(7);
        productRepository.save(product21);

        Product product22 = new Product();
        product22.setTitle("Un reino de carne y fuego");
        product22.setAuthor("Jennifer Armentrout");
        product22.setDescription("Dioses y monstruos");
        product22.setPrice(BigDecimal.valueOf(19.99));
        product22.setTax(21.0);
        product22.setCurrency(Currency.USD);
        product22.setSeller(user1);
        product22.setPopularity(7);
        productRepository.save(product22);

        Product product23 = new Product();
        product23.setTitle("Una corona de huesos dorados");
        product23.setAuthor("Jennifer Armentrout");
        product23.setDescription("Dioses y monstruos");
        product23.setPrice(BigDecimal.valueOf(20.99));
        product23.setTax(21.0);
        product23.setCurrency(Currency.USD);
        product23.setSeller(user1);
        product23.setPopularity(7);
        productRepository.save(product23);
    }
}
