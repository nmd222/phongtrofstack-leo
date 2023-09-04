package com.fstack.phong_tro_fstack.leo.landlord.service;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostDTO;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import java.util.List;

public interface PostService {

  PostDTO savePost(PostReponseDTO dto);

  PostDTO getPostById(long id);

  PostDTO updatePost(PostDTO postDTO, long id);

  List<PostDTO> getPostAndRateByUser(long idUser);

  PostDTO getPostbyAreaId(long idArea);
}
