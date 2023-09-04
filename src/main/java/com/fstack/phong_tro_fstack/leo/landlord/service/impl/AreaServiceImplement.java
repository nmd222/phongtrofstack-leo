package com.fstack.phong_tro_fstack.leo.landlord.service.impl;

import com.fstack.phong_tro_fstack.leo.landlord.base.converter.AreaConverter;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.AreaDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.PostReponseDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.AreaEntity;
import com.fstack.phong_tro_fstack.leo.landlord.repository.AreaRepository;
import com.fstack.phong_tro_fstack.leo.landlord.service.AddressService;
import com.fstack.phong_tro_fstack.leo.landlord.service.AreaService;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@Qualifier("areaService")
@AllArgsConstructor
public class AreaServiceImplement implements AreaService {

  private final AreaRepository areaRepository;
  private final AreaConverter areaConverter;
  AddressService addressService;

  @Override
  public AreaDTO saveArea(PostReponseDTO dto) {
    AreaEntity areaEntity=new AreaEntity();
    areaEntity.setName(dto.getName());
    areaEntity.setLongitude(dto.getLongitude());
    areaEntity.setLatitude(dto.getLatitude());

    areaEntity.setProvinceId(String.format("%02d", Long.parseLong(dto.getIdProvince())));
    areaEntity.setDistrictId(String.format("%03d",Long.parseLong(dto.getIdDistrict())));
    areaEntity.setWardId(String.format("%05d",Long.parseLong(dto.getIdWard())));
    areaEntity.setExactAddress(dto.getExactAddress());
    return areaConverter.toDTO( areaRepository.saveAndFlush(areaEntity));
  }


  @Override
  public AreaDTO getArea(long id) {
    AreaEntity areaEntity = areaRepository.findById(id).get();
    return areaConverter.toDTO(areaEntity);
  }

  @Override
  public AreaDTO updateArea(AreaDTO areaDTO, long id) {
    if (areaDTO != null) {
      AreaEntity areaEntity = areaRepository.getAreaByPostId(id);
      if (areaEntity != null) {
        areaEntity.setName(areaDTO.getName());
        areaEntity.setLongitude(areaDTO.getLongitude());
        areaEntity.setLongitude(areaDTO.getLongitude());
        areaEntity.setExactAddress(areaDTO.getExactAddress());
        areaEntity.setLatitude(areaDTO.getLatitude());
        areaEntity.setProvinceId(String.format("%02d", Long.parseLong(areaDTO.getIdProvince())));
        areaEntity.setDistrictId(String.format("%03d",Long.parseLong(areaDTO.getIdDistrict())));
        areaEntity.setWardId(String.format("%05d",Long.parseLong(areaDTO.getIdWard())));
        areaRepository.save(areaEntity);
      }
    }
    return areaDTO;
  }

  @Override
  public List<AreaDTO> getAllArea() {
    return areaConverter.toListDTO(areaRepository.findAll());
  }

  @Override
  public AreaDTO getAreaByPostId(Long postId) {
    return areaConverter.toDTO(areaRepository.getAreaByPostId(postId));
  }

}
