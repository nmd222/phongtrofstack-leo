package com.fstack.phong_tro_fstack.leo.landlord.controller;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.AreaDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostRequestDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.RoomDTO;
import com.fstack.phong_tro_fstack.leo.landlord.common.Common;
import com.fstack.phong_tro_fstack.leo.landlord.service.AreaService;
import com.fstack.phong_tro_fstack.leo.landlord.service.PostService;
import com.fstack.phong_tro_fstack.leo.landlord.service.RoomService;
import com.fstack.phong_tro_fstack.leo.landlord.service.UserService;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/leo")
@AllArgsConstructor
public class LandlordController {
  private final AreaService areaService;
  private final PostService postService;
  private final RoomService roomService;

  private final UserService userService;


  @GetMapping("/update-post-news")
  public String updatePost(ModelMap modelMap, Model model, @RequestParam("id") long id) {
    PostRequestDTO postRequestDTO=new PostRequestDTO();
    Common common = new Common();
    AreaDTO areaDTO = areaService.getAreaByPostId(id);
    PostDTO postDTO= postService.getPostById(id);
    List<RoomDTO> roomDTOs=roomService.getRoombyPostId(id);
    int soPhong=0;
    List<List<String>> imageRoomsList = new ArrayList<>();
    for (RoomDTO roomDTO : roomDTOs) {
      soPhong++;
      List<String> imageList = common.getListImage(roomDTO.getImage());
      imageRoomsList.add(imageList);
    }
    model.addAttribute("imageRoomsList", imageRoomsList);
    postRequestDTO.setSoPhong(soPhong);
    postDTO.setThumbnail(common.geturlthumbnail(postDTO.getThumbnail()));
    postRequestDTO.setAreaDTO(areaDTO);
    postRequestDTO.setPostDTO(postDTO);
    postRequestDTO.setRoomDTOList(roomDTOs);
    modelMap.addAttribute("area", postRequestDTO);
    return "landlord/post-edit";
  }

  @GetMapping("/post-news")
  public String post_news() {
    return "landlord/post-news";
  }
  @GetMapping("/manage-post")
  public String manage_post() {
    return "landlord/manage-post";
  }

  @GetMapping("/profile")
  public String profile() {
    return "landlord/profile";
  }

  @GetMapping("/sign-in")
  public String sign_in() {
    return "landlord/sign-in";
  }

  @GetMapping("/profile-edit")
  public String profile_edit() {
    return "landlord/profile-edit";
  }

  @GetMapping("/account-balance")
  public String account_balance() {
    return "landlord/account-balance";
  }

  @GetMapping("/chat")
  public String chat() {
    return "landlord/chat";
  }


}
