package com.fstack.phong_tro_fstack.leo.landlord.base.dto;
import java.util.List;
import lombok.Data;

@Data
public class PostRequestDTO {
    private AreaDTO areaDTO;
    private List<RoomDTO> roomDTOList;
    private PostDTO postDTO;
    private int soPhong;
  }
