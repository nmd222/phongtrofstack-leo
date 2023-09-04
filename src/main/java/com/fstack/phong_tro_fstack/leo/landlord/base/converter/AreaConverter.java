package com.fstack.phong_tro_fstack.leo.landlord.base.converter;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.AreaDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.AreaEntity;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AreaConverter implements Mapper<AreaEntity, AreaDTO> {

  @Autowired
  private ModelMapper modelMapper;

  @Override
  public AreaEntity toEntity(AreaDTO dto) {
    return modelMapper.map(dto, AreaEntity.class);
  }

  @Override
  public AreaDTO toDTO(AreaEntity entity) {
    return modelMapper.map(entity, AreaDTO.class);
  }

  public List<AreaDTO> toListDTO(List<AreaEntity> list) {
    List<AreaDTO> areaDTOList = new ArrayList<>();
    for (AreaEntity areaEntity : list) {
      areaDTOList.add(toDTO(areaEntity));
    }
    return areaDTOList;
  }
}
