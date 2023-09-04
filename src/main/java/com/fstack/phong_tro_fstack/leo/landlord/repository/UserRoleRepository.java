package com.fstack.phong_tro_fstack.client.repository;

import com.fstack.phong_tro_fstack.leo.landlord.base.entity.UserRoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {
}
