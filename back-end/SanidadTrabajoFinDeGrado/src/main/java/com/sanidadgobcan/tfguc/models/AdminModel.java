package com.sanidadgobcan.tfguc.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@DiscriminatorValue(value= "ADMIN")
@Table(name = "admin")
public class AdminModel extends GenericUserModel {

}
