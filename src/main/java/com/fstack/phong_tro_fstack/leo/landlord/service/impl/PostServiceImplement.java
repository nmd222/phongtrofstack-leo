package com.fstack.phong_tro_fstack.leo.landlord.service.impl;

import com.fstack.phong_tro_fstack.leo.landlord.base.converter.PostConverter;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.PostEntity;
import com.fstack.phong_tro_fstack.leo.landlord.repository.PostRepository;
import com.fstack.phong_tro_fstack.leo.landlord.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@Qualifier("postService")
@AllArgsConstructor
public class PostServiceImplement implements PostService {

  private final PostRepository postRepository;
  private final PostConverter postConverter;

  @Override
  public PostDTO savePost(PostReponseDTO dto) {
    PostDTO postDTO = new PostDTO();
    postDTO.setThumbnail(dto.getThumbnail());
    postDTO.setContent(dto.getContent());
    postDTO.setTitle(dto.getTitle());
    postDTO.setStatus(dto.getStatus());
    postDTO.setRatetingStart(postDTO.getRatetingStart());
    postDTO.setThumbnail(dto.getThumbnail());
    postDTO.setPhoneNumber(dto.getPhoneNumber());
    postDTO.setPhoneZalo(dto.getPhoneZalo());
    postDTO.setCreatedTime(dto.getCreatedTime());
    postDTO.setIdArea(Long.valueOf(dto.getIdArea()));
    postDTO.setIdUser(dto.getIdUser());
    postRepository.save(postConverter.toEntity(postDTO));
    return postDTO;
  }


  @Override
  public PostDTO getPostById(long id) {
    PostEntity postEntity = postRepository.findById(id).get();
    return postConverter.toDTO(postEntity);
  }

  @Override
  public PostDTO updatePost(PostDTO postDTO, long id) {
    if (postDTO != null) {
      PostEntity postEntity = postRepository.findById(id).get();
      postEntity.setThumbnail(postDTO.getThumbnail());
      postEntity.setContent(postDTO.getContent());
      postEntity.setTitle(postDTO.getTitle());
      postEntity.setPhoneNumber(postDTO.getPhoneNumber());
      postEntity.setPhoneZalo(postDTO.getPhoneZalo());
      postDTO = postConverter.toDTO(postEntity);
      postRepository.save(postEntity);
    }
    return postDTO;
  }

  @Override
  public List<PostDTO> getPostAndRateByUser(long idUser) {
    return postConverter.toListDTOAndRate(postRepository.getPostandRatebyUser(idUser));
  }

  @Override
  public PostDTO getPostbyAreaId(long idArea) {
    return postConverter.toDTO(postRepository.getPostbyAreaId(idArea));
  }


}
