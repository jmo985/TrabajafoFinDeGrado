package com.sanidadgobcan.tfguc.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sanidadgobcan.tfguc.models.*;

@Repository
public interface CentroSaludMedicoRepository extends CrudRepository<CentroSaludMedicoModel, Long> {

}
