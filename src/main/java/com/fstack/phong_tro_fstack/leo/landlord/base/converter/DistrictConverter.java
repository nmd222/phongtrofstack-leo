package com.fstack.phong_tro_fstack.leo.landlord.base.converter;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.DistrictDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.entity.DistrictEntity;
import org.springframework.stereotype.Component;

@Component
public class DistrictConverter {
    public DistrictEntity toEntity(DistrictDTO districtDTO){
        DistrictEntity districtEntity=new DistrictEntity();
        districtEntity.setId(districtDTO.getId());
        districtEntity.setName(districtDTO.getName());
        districtEntity.setType(districtDTO.getType());
        districtEntity.setProvinceId(districtDTO.getIdProvince());
        return districtEntity;
    }

    public DistrictDTO toDTO(DistrictEntity districtEntity){
        DistrictDTO districtDTO=new DistrictDTO();
        districtDTO.setId(districtEntity.getId());
        districtDTO.setName(districtEntity.getName());
        districtDTO.setType(districtEntity.getType());
        districtDTO.setIdProvince(districtEntity.getProvinceId());
        return districtDTO;
    }
}
