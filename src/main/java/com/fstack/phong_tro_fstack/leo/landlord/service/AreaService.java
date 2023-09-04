package com.fstack.phong_tro_fstack.leo.landlord.service;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.AreaDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import java.util.List;

public interface AreaService {

  AreaDTO saveArea(PostReponseDTO dto);

  AreaDTO getArea(long id);

  AreaDTO updateArea(AreaDTO areaDTO, long id);

  AreaDTO getAreaByPostId(Long postId);

  List<AreaDTO> getAllArea();

}
