package com.fstack.phong_tro_fstack.leo.landlord.base.converter;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.UserRoleDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.UserRoleEntity;
import org.springframework.stereotype.Component;

@Component
public class UserRoleConverter {
    public UserRoleEntity toEntity(UserRoleDTO userRoleDTO) {
        Long idUser= userRoleDTO.getUserId();
        Long idRole= userRoleDTO.getRoleId();
        UserRoleEntity userRoleKey= new UserRoleEntity();
        userRoleKey.setIdUser(idUser);
        userRoleKey.setIdRole(idRole);
        userRoleKey.setCreatedAt(userRoleDTO.getCreatedAt());
        return userRoleKey;
    }

    public UserRoleDTO toDTO(UserRoleEntity userRoleEntity) {
        Long idUser=userRoleEntity.getIdUser();
        Long idRole=userRoleEntity.getIdRole();
        UserRoleDTO userRoleKeyDTO=new UserRoleDTO();
        userRoleKeyDTO.setUserId(idUser);
        userRoleKeyDTO.setRoleId(idRole);
        userRoleKeyDTO.setCreatedAt(userRoleEntity.getCreatedAt());
        return userRoleKeyDTO;
    }
}
