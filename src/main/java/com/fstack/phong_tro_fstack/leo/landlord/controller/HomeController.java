package com.fstack.phong_tro_fstack.leo.landlord.controller;


import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.UserDTO;
import com.fstack.phong_tro_fstack.leo.landlord.common.Common;
import com.fstack.phong_tro_fstack.leo.landlord.service.AreaService;
import com.fstack.phong_tro_fstack.leo.landlord.service.PostService;
import com.fstack.phong_tro_fstack.leo.landlord.service.UserService;
import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/leo")
@AllArgsConstructor
public class HomeController {
  private final PostService postService;

  private final UserService userService;

  @GetMapping({"/home/{id}", "/{id}"})
  public String homeShowNews(ModelMap modelMap, HttpSession session, @PathVariable("id") Long id) {
    UserDTO user = userService.getUser(id);
    session.setAttribute("user", user);
    long idUser = ((UserDTO) session.getAttribute("user")).getId();
    List<PostDTO> postDTOs = postService.getPostAndRateByUser(idUser);
    Common common = new Common();
    List<PostDTO> updatedPostDTOs = new ArrayList<>();
    if(Objects.nonNull(postDTOs))  {
      for (PostDTO post : postDTOs) {
        if(Objects.nonNull(post.getThumbnail())){
          post.setThumbnail(common.geturlthumbnail(post.getThumbnail()));
          updatedPostDTOs.add(post);
        }
      }
    }
    postDTOs = updatedPostDTOs;
    modelMap.addAttribute("posts", postDTOs);
    return "landlord/home";
  }

}
