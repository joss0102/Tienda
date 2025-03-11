
package com.tienda.app.seeders;
import com.tienda.app.enums.RoleName;
import com.tienda.app.models.Role;
import com.tienda.app.models.User;
import com.tienda.app.repositories.RoleRepository;
import com.tienda.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class UsersDataLoader implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;  // Asegúrate de tener esto inyectado

    @Override
    public void run(String... args) throws Exception {

        // Insertar roles
        Role adminRole = new Role();
        adminRole.setRoleName(RoleName.ADMIN);

        Role clientRole = new Role();
        clientRole.setRoleName(RoleName.CLIENT);

        Role sellerRole = new Role();
        sellerRole.setRoleName(RoleName.SELLER);

        // Guardar roles en la base de datos
        roleRepository.save(adminRole);
        roleRepository.save(clientRole);
        roleRepository.save(sellerRole);

        // Insertar usuarios
        User user1 = new User();
        user1.setUsername("jose");
        user1.setPassword(passwordEncoder.encode("1234"));  // Cifrar la contraseña
        user1.setRole(adminRole);
        userRepository.save(user1);

        User user2 = new User();
        user2.setUsername("helio");
        user2.setPassword(passwordEncoder.encode("1234"));  // Cifrar la contraseña
        user2.setRole(clientRole);
        userRepository.save(user2);

        User user3 = new User();
        user3.setUsername("isabel");
        user3.setPassword(passwordEncoder.encode("1234"));  // Cifrar la contraseña
        user3.setRole(clientRole);
        userRepository.save(user3);

        User user4 = new User();
        user4.setUsername("dumi");
        user4.setPassword(passwordEncoder.encode("1234"));  // Cifrar la contraseña
        user4.setRole(sellerRole);
        userRepository.save(user4);



    }
}
