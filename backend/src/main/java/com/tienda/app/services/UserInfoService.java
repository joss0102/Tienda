package com.tienda.app.services;

import com.tienda.app.models.UserInfo;
import com.tienda.app.repositories.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;

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
}
