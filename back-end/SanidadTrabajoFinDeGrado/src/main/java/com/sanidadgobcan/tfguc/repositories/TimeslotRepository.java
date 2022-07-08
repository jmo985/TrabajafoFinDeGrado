package com.sanidadgobcan.tfguc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sanidadgobcan.tfguc.models.CentroSaludModel;
import com.sanidadgobcan.tfguc.models.TimeslotModel;

@Repository
public interface TimeslotRepository extends CrudRepository<TimeslotModel, Long> { 

}
