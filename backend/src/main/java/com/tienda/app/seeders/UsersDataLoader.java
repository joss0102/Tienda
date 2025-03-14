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
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        Role adminRole = new Role();
        adminRole.setRoleName(RoleName.ADMIN);

        Role clientRole = new Role();
        clientRole.setRoleName(RoleName.CLIENT);

        Role sellerRole = new Role();
        sellerRole.setRoleName(RoleName.SELLER);

        roleRepository.save(adminRole);
        roleRepository.save(clientRole);
        roleRepository.save(sellerRole);

        saveUser("Joss", "1234", adminRole, "Jose", "Rosell", "C/Géminis, Parla");
        saveUser("HelioVK", "1234", sellerRole, "Helio", "Rebato", "C/La diligencia, Vallecas");
        saveUser("IsaFdez", "1234", clientRole, "Isabel", "Fernandez", "C/isabel II, Parla");
        saveUser("Dumi", "1234", clientRole, "Dumi", "Thomas", "C/estrella vega, Parla");
        saveUser("David", "12345", clientRole, "David", "Fernandez", "Plaza eliptica");
    }

    private void saveUser(String username, String password, Role role, String firstName, String lastName, String address) {

        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);

        userRepository.save(user);

        UserInfo userInfo = new UserInfo();
        userInfo.setFirstName(firstName);
        userInfo.setLastName(lastName);
        userInfo.setAddress(address);
        userInfo.setUser(user);

        userInfoRepository.save(userInfo);
    }

    private UserInfo saveUserInfo(String firstName, String lastName, String address) {

        UserInfo userInfo = new UserInfo();
        userInfo.setFirstName(firstName);
        userInfo.setLastName(lastName);
        userInfo.setAddress(address);
        
        userInfoRepository.save(userInfo);

        return userInfo;
    }
}
