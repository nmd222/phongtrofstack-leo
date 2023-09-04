package com.fstack.phong_tro_fstack.leo.landlord.base.dto;

import java.util.Date;
import lombok.Data;

@Data
public class AccountVerificationDTO extends BaseDTO{
    private String email;

    private String token;

    private Date createdAt;
}
