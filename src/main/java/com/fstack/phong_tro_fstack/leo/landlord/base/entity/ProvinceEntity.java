package com.fstack.phong_tro_fstack.leo.landlord.base.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "province")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ProvinceEntity{

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "name", length = 45, nullable = false)
    private String name;

    @Column(name = "type", length = 45, nullable = false)
    private String type;

}
