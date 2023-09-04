package com.fstack.phong_tro_fstack.leo.landlord.controller;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.AreaDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.BaseDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.RoomDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.UserDTO;
import com.fstack.phong_tro_fstack.leo.landlord.service.PostService;
import com.fstack.phong_tro_fstack.leo.landlord.service.RoomService;
import com.fstack.phong_tro_fstack.leo.landlord.service.impl.AreaServiceImplement;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/leo")
@AllArgsConstructor
public class PostManageController {

  private final AreaServiceImplement areaService;
  private final RoomService roomService;
  private final PostService postService;


  @RequestMapping(value = "/PostNews/save-post-news")
  public ResponseEntity<PostReponseDTO> savePost(@RequestBody PostReponseDTO dto,
      HttpSession session) {
    UserDTO userDTO = (UserDTO) session.getAttribute("user");
    dto.setIdUser((userDTO != null ? userDTO.getId() : 2L));
    dto.setThumbnail((String) session.getAttribute("one-image"));
    AreaDTO areaDTO = areaService.saveArea(dto);
    if(areaDTO.getId()<=0){
      areaDTO = areaService.saveArea(dto);
      dto.setIdArea(String.valueOf(areaDTO.getId()));
    }else{
      dto.setIdArea(String.valueOf(areaDTO.getId()));
    }
    int i = 1;
    for (RoomDTO room : dto.getRoomDTOList()) {
      String imageUrl = (String) session.getAttribute("list-image" + i);
      room.setIdArea(Long.valueOf(dto.getIdArea()));
      room.setImage(imageUrl);
      i++;
    }
    roomService.saveRoom(dto);
    postService.savePost(dto);
    return ResponseEntity.ok(dto);
  }

  @PutMapping(value = "/PostNews/update-post-news")
  public ResponseEntity<?> UpdatePost(@RequestBody PostReponseDTO dto,
      HttpSession session) {
    long id = Long.parseLong(dto.getIdPost());
    Long idArea = areaService.getAreaByPostId(id).getId();
    List<Long> idRooms = roomService.getRoombyPostId(id).stream().map(BaseDTO::getId).distinct().collect(
        Collectors.toList());
    dto.setThumbnail((String) session.getAttribute("one-image"));
    dto.setIdArea(String.valueOf(idArea));
    for (int i = 0; i < dto.getRoomDTOList().size(); i++) {
      dto.getRoomDTOList().get(i).setImage(String.valueOf(session.getAttribute("list-image"+(i+1))));
      dto.getRoomDTOList().get(i).setId(idRooms.get(i));
      dto.getRoomDTOList().get(i).setIdArea(idArea);
    }
    roomService.saveRoom(dto);
    postService.savePost(dto);
    return ResponseEntity.ok(dto);
  }


}
