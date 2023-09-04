package com.fstack.phong_tro_fstack.leo.landlord.repository;

import com.fstack.phong_tro_fstack.leo.landlord.base.entity.RoomEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<RoomEntity, Long> {

  @Query(value = "select r from RoomEntity  r inner join AreaEntity a on a.id=r.areaId where r.areaId=:idArea")
  List<RoomEntity> getRoombyAreaId(@Param("idArea") long idArea);

  @Query(value = "select r from RoomEntity r inner join AreaEntity a on a.id=r.areaId"
      + "      inner join PostEntity p on a.id=p.areaId  where p.id=:idPost")
  List<RoomEntity> getRoombyPostId(@Param("idPost") long idPost);

}
