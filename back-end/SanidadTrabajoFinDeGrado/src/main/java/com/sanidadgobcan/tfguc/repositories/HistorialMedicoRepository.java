package com.sanidadgobcan.tfguc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sanidadgobcan.tfguc.models.HistorialMedicoModel;

@Repository
public interface HistorialMedicoRepository extends CrudRepository<HistorialMedicoModel, Long>{

}
