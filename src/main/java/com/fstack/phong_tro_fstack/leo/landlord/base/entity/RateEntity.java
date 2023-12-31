package com.fstack.phong_tro_fstack.leo.landlord.base.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Table(name = "rate")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RateEntity extends BaseEntity{
    @Column(name = "rating_stars", nullable = false)
    private Integer ratingStarts;

    @Column(name = "comment", columnDefinition = "text")
    private String comment;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @Column(name = "id_user", nullable = false)
    private long userId;

    @Column(name = "id_area", nullable = false)
    private long areaId;
}
