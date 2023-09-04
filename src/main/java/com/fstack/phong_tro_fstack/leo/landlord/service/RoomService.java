package com.fstack.phong_tro_fstack.leo.landlord.service;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.RoomDTO;
import java.util.List;

public interface RoomService {

  List<RoomDTO> saveRoom(PostReponseDTO dto);


  List<RoomDTO> updateRoom(PostReponseDTO dto);

  List<RoomDTO> getRoombyAreaId(long idArea);

  List<RoomDTO> getRoombyPostId(long idPost);
}
