package com.fstack.phong_tro_fstack.leo.landlord.repository;

import com.fstack.phong_tro_fstack.leo.landlord.base.entity.AreaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AreaRepository extends JpaRepository<AreaEntity, Long> {

  @Query(value = "select a from AreaEntity a inner join PostEntity p on a.id=p.areaId where p.id=:idPost")
  AreaEntity getAreaByPostId(@Param("idPost") Long id);
}
