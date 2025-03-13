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

        // Usamos el primer y segundo usuario como vendedores
        User user1 = users.get(0);
        User user2 = users.get(1);



        // Insertar productos
        saveProduct(user1, "Trono de cristal", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(22.99), 21.0, Currency.EUR, 3,
                "En las tenebrosas minas de sal de Endovier, una muchacha de dieciocho años cumple cadena perpetua. Es una asesina profesional, la mejor en lo suyo, pero ha cometido un error fatal. La han capturado. El joven capitán Westfall le ofrece un trato: la libertad a cambio de un enorme sacrificio. Celaena debe representar al príncipe en un torneo a muerte, en el que deberá luchar con los asesinos y ladrones más peligrosos del reino. Viva o muerta, Celaena será libre.");
        saveProduct(user1, "Corona de medianoche", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(22.50), 21.0, Currency.EUR, 3,
                "Celaena Sardothien se ha convertido en la campeona del rey, aunque dista mucho de ser leal a la Corona. El rey es perverso, y Celaena, atrapada en la red de intrigas y misterios del castillo de cristal, no puede confiar en nadie, ni siquiera en el príncipe Dorian, en el capitán de la guardia, Chaol, o en su amiga, la princesa Nehemia. Cuando algo absolutamente inesperado suceda, Celaena se verá obligada a decidir de una vez por todas a quién ofrecerle su lealtad… y por quién luchar.");
        saveProduct(user1, "La espada de la asesina", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(23.99), 21.0, Currency.EUR, 4,
                "Celaena Sardothien es la asesina más temida de Adarlan. Como parte del Gremio de Asesinos, ha jurado proteger a su maestro, Arobynn Hamel, pero Celaena no escucha a nadie y solo confía en su amigo Sam.");

        saveProduct(user2, "Heredera de fuego", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(24.99), 21.0, Currency.EUR, 6,
                "Como asesina del rey, Celaena Sardothien está obligada a servir al tirano que asesinó a su mejor amiga. Pero se ha prometido a sí misma que se lo hará pagar. Las respuestas que Celaena necesita para destruir al rey se encuentran más allá del mar, en Wendlyn. Y Chaol, capitán de la guardia real, ha puesto su futuro en peligro al enviarla allí.");
        saveProduct(user2, "Reina de sombras", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(25.99), 21.0, Currency.EUR, 8,
                "Toda la gente a la que Celaena Sardothien amaba le ha sido arrebatada. Pero al fin ha regresado al imperio… por venganza y para rescatar al que en su día fue un glorioso reino, además de para enfrentarse a las sombras de su pasado… Ha llegado la hora de luchar por su gente, esclavizada por un brutal rey y a la espera del regreso triunfal de su reina perdida.");
        saveProduct(user2, "Imperio de tormentas", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(26.99), 21.0, Currency.EUR, 8,
                "El largo camino hasta el trono tan solo ha comenzado. Aelin ha perdido y ganado amigos, ha sufrido traiciones y comprado alianzas. Ahora deberá profundizar en sus poderes si quiere ser capaz de proteger a aquellos a los que ama. Pero a medida que resurgen monstruos de su pasado y las fuerzas oscuras parecen decididas a conquistar su mundo, su única posibilidad de salvación depende de una aventura que podría hacer que Aelin lo pierda todo. ¿Qué deberá sacrificar para mantener su mundo a salvo?");
        saveProduct(user2, "Torre del alba", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(26.99), 21.0, Currency.EUR, 5,
                "Chaol Westfall siempre se había definido a sí mismo por su inquebrantable lealtad y su puesto como capitán de la guardia. Pero todo cambió cuando el castillo de cristal fue destruido, cuando sus hombres fueron masacrados, cuando el rey de Adarlan estuvo a punto de matarlo.");
        saveProduct(user2, "Reino de cenizas", "Sarah J. Maas", "Fantasia", "Romance",BigDecimal.valueOf(27.99), 21.0, Currency.EUR, 10,
                "Aelin lo ha arriesgado todo para salvar a su gente, pero el coste ha sido tremendo. Encerrada dentro de un ataúd de hierro por la reina de las hadas, Aelin deberá usar su inquebrantable voluntad para soportar meses de tortura. Ceder ante Maeve condenaría a aquellos a los que quiere, y por eso resiste, pero le cuesta más cada día que pasa…");

        saveProduct(user1, "Alas de Sangre", "Rebecca Yarros", "Fantasia", "Dragones",BigDecimal.valueOf(21.99), 21.0, Currency.EUR, 6,
                "Violet Sorrengail creía que se uniría al Cuadrante de los Escribas para vivir una vida tranquila, sin embargo, por órdenes de su madre, debe unirse a los miles de candidatos que, en el Colegio de Guerra de Basgiath, luchan por formar parte de la élite de Navarre: el Cuadrante de los Jinetes de dragones.");
        saveProduct(user1, "Alas de Hierro", "Rebecca Yarros", "Fantasia", "Dragones",BigDecimal.valueOf(21.99), 21.0, Currency.EUR, 7,
                "Todos esperaban que Violet Sorrengail muriera durante su primer año en el Colegio de Guerra Basgiath, incluso ella misma. Pero la Trilla fue tan solo la primera de una serie de pruebas imposibles destinadas a deshacerse de los indignos y los desafortunados.");
        saveProduct(user1, "Alas de Onix", "Rebecca Yarros", "Fantasia", "Dragones",BigDecimal.valueOf(21.99), 21.0, Currency.EUR, 6,
                "Tras casi dieciocho meses en el Colegio de Guerra Basgiath, Violet Sorrengail tiene claro que no queda tiempo para entrenar. Hay que tomar decisiones. La batalla ha comenzado y, con enemigos acercándose a las murallas e infiltrados en sus propias filas, es imposible saber en quién confiar.");

        saveProduct(user2, "Un destino teñido de sangre", "Jay Kristoff", "Alta fantasia", "Vampiros",BigDecimal.valueOf(22.99), 21.0, Currency.EUR, 7,
                "Durante casi tres décadas, los vampiros han luchado contra los humanos, cimentando su imperio eterno mientras el nuestro se desangraba. Ahora los que sobrevivimos somos solo unas chispas de luz en un mar de oscuridad creciente. Gabriel de León es el último miembro de la Orden de Plata, dedicada a defender el reino y la iglesia antes de que los arrasaran. Su destrucción fue imparable cuando la luz del día nos abandonó.");
        saveProduct(user2, "Una ventana a la oscuridad", "Jay Kristoff", "Alta fantasia","Drama", BigDecimal.valueOf(21.99), 21.0, Currency.EUR, 7,
                "Gabriel de León ha perdido la oportunidad de acabar con la noche sin fin. Ahora, embarcado en una incierta alianza con una vampira, se propone recurrir a la enigmática estirpe Esani para averiguar cómo deshacer la muerte de los días...");

        saveProduct(user2, "Una corte de rosas y espinas", "Jennifer Armentrout", "Romantasy","Faes", BigDecimal.valueOf(15.99), 21.0, Currency.EUR, 7,
                "Cuando la cazadora Feyre mata a un lobo en el bosque, una criatura bestial irrumpe en su casa para exigir una compensación. Así, es trasladada a una tierra mágica y engañosa de la que solo había oído hablar en las leyendas, donde Feyre descubre que su captor no es un animal sino Tamlin: una divinidad inmortal y letal que alguna vez reinó en su mundo.");
        saveProduct(user2, "Una corte de niebla y furia", "Jennifer Armentrout", "Romantasy","Faes", BigDecimal.valueOf(16.99), 21.0, Currency.EUR, 7,
                "Tras haber superado más pruebas de las que un corazón humano puede soportar, Feyre regresa a la Corte Primavera con los poderes de una alta fae. Sin embargo, no consigue olvidar los crímenes que se vio obligada a cometer para salvar a Tamlin y a su pueblo, ni el perverso pacto que forjó con Rhysand, el alto lord de la temible Corte Noche.");
        saveProduct(user2, "Una corte de alas y ruina", "Jennifer Armentrout", "Romantasy", "Faes",BigDecimal.valueOf(17.99), 21.0, Currency.EUR, 7,
                "Feyre regresa a la Corte Primavera, decidida a reunir información sobre los planes de Tamlin y del rey invasor que amenaza con destruir Prythian. Para esto deberá formar parte de un peligroso, e incluso letal, juego de engaño. Un juego en el que un simple error podría condenar no solo a Feyre sino también a todo el mundo a su alrededor.");
        saveProduct(user2, "Una corte de hielo y estrellas", "Jennifer Armentrout", "Romantasy", "Faes",BigDecimal.valueOf(16.99), 21.0, Currency.EUR, 7,
                "Feyre, Rhys y su círculo más íntimo de amigos están muy ocupados reconstruyendo la Corte Noche y el vasto mundo que la rodea. Pero el solsticio de invierno finalmente se acerca, y con él, parece que llegará cierto alivio ganado con mucho esfuerzo. No obstante, esta atmósfera alegre y festiva no conseguirá detener las sombras del pasado que acechan sin dar tregua.");
        saveProduct(user2, "Una corte de llamas plateadas", "Jennifer Armentrout", "Romantasy","Faes", BigDecimal.valueOf(18.99), 21.0, Currency.EUR, 7,
                "Desde que fue forzada a meterse en el Caldero y se convirtió en alta fae en contra de su voluntad, Nesta Archeron lucha por encontrar su propio lugar dentro del extraño y letal mundo en el que habita. A su temperamento irascible se suma la dificultad para superar los horrores de la guerra con Hybern y todo lo que perdió en ella.");

        saveProduct(user1, "El ciclo del roble y el acebo", "Jennifer Armentrout", "Romantasy", "Dioses",BigDecimal.valueOf(18.99), 21.0, Currency.EUR, 7,
                "Elegida desde su nacimiento para dar comienzo a una nueva era, la vida de Poppy nunca le ha pertenecido. La vida de la Doncella es solitaria. Jamás la tocarán. Jamás la mirarán. Jamás le hablarán. Jamás sentirá placer. Mientras espera el día de su Ascensión, preferiría estar con los guardias luchando contra el mal que se llevó a su familia que preparándose para que los dioses la encuentren lo bastante digna. Pero la elección nunca ha sido suya.");
        saveProduct(user1, "El cortejo de Bristol Keats", "Jennifer Armentrout", "Romantasy", "Historia",BigDecimal.valueOf(18.99), 21.0, Currency.EUR, 7,
                "Nada podrá evitar que Poppy libere a su Rey y destruya todo lo que la Corona de Sangre representa. Con la fuerza de los guardias y el apoyo de los wolven, Poppy debe convencer a los generales de Atlantia de luchar a su manera, porque esta vez no puede haber retirada. No si ella mantiene la esperanza de construir un futuro en el que los dos reinos puedan convivir en paz.");
        saveProduct(user1, "Los juegos de los dioses", "Jennifer Armentrout", "Fantasia","Dioses", BigDecimal.valueOf(19.99), 21.0, Currency.EUR, 7,
                "La Reina de Carne y Fuego se ha convertido en la Primigenia de Sangre y Hueso, la verdadera Primigenia de la Vida y la Muerte. Y la batalla que Casteel, Poppy y sus aliados han estado librando solo acaba de empezar. Los dioses se están despertando por todo Iliseeum y en el mundo mortal, preparándose para la guerra que se avecina.");
        saveProduct(user1, "Phantasma", "Jennifer Armentrout", "Drama","Suspense", BigDecimal.valueOf(19.99), 21.0, Currency.EUR, 7,
                "Todo lo que ha creído Poppy es mentira, incluido el hombre del que se estaba enamorando. Rodeada de pronto por gente que la ve como un símbolo de un reino monstruoso, apenas sabe quién es sin el velo de la Doncella. Pero lo que sí sabe es que nada es tan peligroso para ella como él. El Señor Oscuro. El príncipe de Atlantia.");
        saveProduct(user1, "Sin corazon", "Jennifer Armentrout", "Fantasia","Romance", BigDecimal.valueOf(20.99), 22.0, Currency.USD, 7,
                "Poppy jamás soñó que encontraría el amor que ha encontrado con el príncipe Casteel. Le gustaría disfrutar de su felicidad, pero primero deben liberar al hermano de Casteel y encontrar al suyo. Es una misión peligrosa y una de enormes consecuencias con las que ninguno de los dos había soñado. Porque Poppy es la Elegida, la Bendecida. La verdadera regente de Atlantia. Lleva en su interior la sangre del rey de los dioses. Por derecho propio, la corona y el reino son suyos.");
    }




    private void saveProduct(User seller, String title, String author, String genre1,String genre2, BigDecimal price, double tax, Currency currency, int popularity,String description) {
        Product product = new Product();
        product.setTitle(title);
        product.setAuthor(author);
        product.setDescription(description);
        product.setGenre1(genre1);
        product.setGenre2(genre2);
        product.setPrice(price);
        product.setTax(tax);
        product.setCurrency(currency);
        product.setSeller(seller);
        product.setPopularity(popularity);
        productRepository.save(product);
    }
}
