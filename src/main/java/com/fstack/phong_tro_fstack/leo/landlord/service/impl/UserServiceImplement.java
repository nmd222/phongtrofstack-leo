package com.fstack.phong_tro_fstack.leo.landlord.service.impl;


import com.fstack.phong_tro_fstack.leo.landlord.repository.UserRepository;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.UserDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.UserEntity;
import com.fstack.phong_tro_fstack.leo.landlord.service.UserService;
import java.util.Arrays;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.codehaus.groovy.util.StringUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import org.thymeleaf.util.StringUtils;


@Service
@Transactional
@AllArgsConstructor
public class UserServiceImplement implements UserService {


    private final UserRepository userRepository;


    @Override
    public UserDTO addUser(UserDTO userDTO) {
        if (userDTO != null) {
            UserEntity user = new UserEntity();
            user.setCreatedAt(Date.valueOf(java.time.LocalDate.now()));
            user.setEmail(userDTO.getEmail());
            user.setFullName(userDTO.getFullName());
            user.setIdCard(userDTO.getIdCard());
            user.setPassword(userDTO.getPassword());
            user.setPhoneNumber(userDTO.getPhoneNumber());
            userRepository.save(user);
        }
        return userDTO;
    }

    @Override
    public UserDTO getUser(long id) {

        UserEntity user = userRepository.findOneById(id);
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setCreatedAt(user.getCreatedAt());
        userDTO.setEmail(user.getEmail());
        userDTO.setFullName(user.getFullName());
        userDTO.setIdCard(user.getIdCard());
        userDTO.setPassword(user.getPassword());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        return userDTO;
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO, long id) {
        if(userDTO!=null && id!=0){
            UserEntity user = userRepository.findOneById(id);
        if(user!=null){
            userDTO.setId(user.getId());
            user.setCreatedAt(Date.valueOf(java.time.LocalDate.now()));
            user.setEmail(userDTO.getEmail());
            user.setFullName(userDTO.getFullName());
            user.setIdCard(userDTO.getIdCard());
            user.setPassword(userDTO.getPassword());
            user.setPhoneNumber(userDTO.getPhoneNumber());
            userRepository.save(user);
        }
        }
        return userDTO;
    }

}
