package com.fstack.phong_tro_fstack.leo.landlord.base.converter;

public interface Mapper<E, D> {

  E toEntity(D dto);

  D toDTO(E entity);



}