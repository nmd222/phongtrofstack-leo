package com.fstack.phong_tro_fstack.leo.landlord.service.impl;

import com.fstack.phong_tro_fstack.leo.landlord.base.converter.DistrictConverter;
import com.fstack.phong_tro_fstack.leo.landlord.base.converter.ProvinceConverter;
import com.fstack.phong_tro_fstack.leo.landlord.base.converter.WardConverter;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.DistrictDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.ProvinceDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.WardDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.DistrictEntity;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.ProvinceEntity;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.WardEntity;
import com.fstack.phong_tro_fstack.leo.landlord.repository.DistrictRepository;
import com.fstack.phong_tro_fstack.leo.landlord.repository.ProvinceRepository;
import com.fstack.phong_tro_fstack.leo.landlord.repository.WardRepository;
import com.fstack.phong_tro_fstack.leo.landlord.service.AddressService;
import java.util.Collections;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class AddressServiceImplement implements AddressService {
private final WardConverter wardConverter;
private final DistrictRepository districtRepository;
private final ProvinceRepository provinceRepository;
private final ProvinceConverter provinceConverter;
private final WardRepository wardRepository;
private final DistrictConverter districtConverter;

  @Override
  public List<ProvinceDTO> getProvince() {
    List<ProvinceEntity> entityList = provinceRepository.findAllById(
        Collections.singleton(1L));
    return entityList.stream().map(provinceConverter::toDTO).collect(Collectors.toList());
  }

  @Override
  public List<WardDTO> getWard(long id) {
    List<WardEntity> entityList = wardRepository.findAllByDistrictId(id);
    return entityList.stream().map(wardConverter::toDTO).collect(Collectors.toList());
  }

  @Override
  public List<DistrictDTO> getDistrict() {
    List<DistrictEntity> entityList = districtRepository.findAllByProvinceId(1L);
    return entityList.stream().map(districtConverter::toDTO).collect(Collectors.toList());
  }

}
