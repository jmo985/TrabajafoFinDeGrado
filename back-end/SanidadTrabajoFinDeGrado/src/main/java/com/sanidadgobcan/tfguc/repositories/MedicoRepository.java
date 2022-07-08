package com.sanidadgobcan.tfguc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sanidadgobcan.tfguc.models.*;

@Repository
public interface MedicoRepository extends CrudRepository<MedicoModel, Long> {
}