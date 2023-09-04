package com.fstack.phong_tro_fstack.leo.landlord.service.impl;

import com.fstack.phong_tro_fstack.leo.landlord.base.converter.RoomCoverter;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.RoomDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.RoomEntity;
import com.fstack.phong_tro_fstack.leo.landlord.repository.RoomRepository;

import com.fstack.phong_tro_fstack.leo.landlord.service.RoomService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@Qualifier("roomService")
@AllArgsConstructor
public class RoomServiceImplement implements RoomService {

  private final RoomRepository roomRepository;
  private final RoomCoverter roomCoverter;

  @Override
  public List<RoomDTO> saveRoom(PostReponseDTO dto) {
    List<RoomEntity> roomEntities = dto.getRoomDTOList()
        .stream().map(roomCoverter::toEntity)
        .collect(Collectors.toList());
    roomRepository.saveAll(roomEntities);

    return dto.getRoomDTOList();
  }

  @Override
  public List<RoomDTO> updateRoom(PostReponseDTO dto) {
    List<RoomEntity> roomEntities = dto.getRoomDTOList()
        .stream().map(roomCoverter::toEntity)
        .collect(Collectors.toList());
    roomRepository.saveAll(roomEntities);

    return dto.getRoomDTOList();
  }

  @Override
  public List<RoomDTO> getRoombyAreaId(long idArea) {
    return roomCoverter.toListDTO(roomRepository.getRoombyAreaId(idArea));
  }

  @Override
  public List<RoomDTO> getRoombyPostId(long idPost) {
    return roomCoverter.toListDTO(roomRepository.getRoombyPostId(idPost));
  }
}
