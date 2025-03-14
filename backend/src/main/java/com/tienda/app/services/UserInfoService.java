package com.tienda.app.services;

import com.tienda.app.models.User;
import com.tienda.app.models.UserInfo;
import com.tienda.app.repositories.UserInfoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;
    public List<UserInfo> getAllUsersInfo() {
        return this.userInfoRepository.findAll();
    }
    public Optional<UserInfo> getUserInfoById(Long id) {
        return userInfoRepository.findById(id);
    }

    public Optional<UserInfo> getUserInfoByUserId(Long userId) {
        return userInfoRepository.findByUserId(userId);
    }

    public UserInfo createUserInfo(UserInfo userInfo) {
        return userInfoRepository.save(userInfo);
    }

    public void deleteUserInfo(Long id) {
        userInfoRepository.deleteById(id);
    }
    public UserInfo updateUserInfo(Long id, UserInfo updatedUserInfo) {
        // Verificar si existe el usuario y actualizar
        return userInfoRepository.findById(id).map(userInfo -> {
            userInfo.setFirstName(updatedUserInfo.getFirstName());
            userInfo.setLastName(updatedUserInfo.getLastName());
            userInfo.setAddress(updatedUserInfo.getAddress());
            return userInfoRepository.save(userInfo);
        }).orElseThrow(() -> new EntityNotFoundException("UserInfo not found"));
    }

}