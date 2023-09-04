package com.fstack.phong_tro_fstack.leo.landlord.controller;


import com.fstack.phong_tro_fstack.leo.landlord.base.dto.*;
import com.fstack.phong_tro_fstack.leo.landlord.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leo")
@AllArgsConstructor
public class AddressController {

  private final AddressService addressService;

  //show address.
  @GetMapping("/PostNews/province")
  public ResponseEntity<?> getAddress() {
    List<ProvinceDTO> result = addressService.getProvince();
    return ResponseEntity.ok(result);
  }


  @GetMapping("/PostNews/district")
  public ResponseEntity<?> getListDistrictByIdProvince() {

    List<DistrictDTO> result = addressService.getDistrict();

    return ResponseEntity.ok(result);
  }

  @GetMapping("/PostNews/ward/{idDistrict}")
  public ResponseEntity<?> getListWardByIdDistrict(@PathVariable long idDistrict) {
    List<WardDTO> result = addressService.getWard(idDistrict);
    return ResponseEntity.ok(result);
  }





}
