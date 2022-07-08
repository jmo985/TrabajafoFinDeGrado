package com.sanidadgobcan.tfguc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sanidadgobcan.tfguc.models.AdminModel;

@Repository
public interface AdminRepository extends CrudRepository<AdminModel, Long>{

}
