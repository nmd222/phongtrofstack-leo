package com.fstack.phong_tro_fstack.leo.landlord.service;

import com.fstack.phong_tro_fstack.leo.landlord.base.dto.DistrictDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.ProvinceDTO;
import com.fstack.phong_tro_fstack.leo.landlord.base.dto.WardDTO;

import java.util.List;

public interface AddressService {
    List<ProvinceDTO> getProvince();
    List<WardDTO> getWard(long id);
    List<DistrictDTO> getDistrict();

}
