
package com.tienda.app.seeders;
import com.tienda.app.enums.RoleName;
import com.tienda.app.models.Role;
import com.tienda.app.models.UserInfo;
import com.tienda.app.models.User;
import com.tienda.app.repositories.RoleRepository;
import com.tienda.app.repositories.UserInfoRepository;
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
    private UserInfoRepository userInfoRepository;

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
        user1.setUsername("Joss");
        user1.setPassword(passwordEncoder.encode("1234"));
        user1.setRole(adminRole);
        userRepository.save(user1);

        UserInfo userInfo1 = new UserInfo();
        userInfo1.setFirstName("Jose");
        userInfo1.setLastName("Rosell");
        userInfo1.setAddress("C/Géminis, Parla");
        userInfo1.setUser(user1);
        userRepository.save(user1);
        userInfoRepository.save(userInfo1);


        User user2 = new User();
        user2.setUsername("HelioVK");
        user2.setPassword(passwordEncoder.encode("1234"));
        user2.setRole(sellerRole);
        userRepository.save(user2);

        UserInfo userInfo2 = new UserInfo();
        userInfo2.setFirstName("Helio");
        userInfo2.setLastName("Rebato");
        userInfo2.setAddress("C/La diligencia, Vallecas");
        userInfo2.setUser(user2);
        userRepository.save(user2);
        userInfoRepository.save(userInfo2);


        User user3 = new User();
        user3.setUsername("IsaFdez");
        user3.setPassword(passwordEncoder.encode("1234"));
        user3.setRole(clientRole);
        userRepository.save(user3);

        UserInfo userInfo3 = new UserInfo();
        userInfo3.setFirstName("Isabel");
        userInfo3.setLastName("Fernandez");
        userInfo3.setAddress("C/isabel II, Parla");
        userInfo3.setUser(user3);
        userRepository.save(user3);
        userInfoRepository.save(userInfo3);


        User user4 = new User();
        user4.setUsername("Dumi");
        user4.setPassword(passwordEncoder.encode("1234"));
        user4.setRole(clientRole);
        userRepository.save(user4);

        UserInfo userInfo4 = new UserInfo();
        userInfo4.setFirstName("Dumi");
        userInfo4.setLastName("Thomas");
        userInfo4.setAddress("C/estrella vega, Parla");
        userInfo4.setUser(user4);
        userRepository.save(user4);
        userInfoRepository.save(userInfo4);


        User user5 = new User();
        user5.setUsername("David");
        user5.setPassword(passwordEncoder.encode("1234"));
        user5.setRole(clientRole);
        userRepository.save(user5);

        UserInfo userInfo5 = new UserInfo();
        userInfo5.setFirstName("David");
        userInfo5.setLastName("Fernandez");
        userInfo5.setAddress("Plaza eliptica");
        userInfo5.setUser(user5);
        userRepository.save(user5);
        userInfoRepository.save(userInfo5);
    }
}
