package com.sanidadgobcan.tfguc.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sanidadgobcan.tfguc.models.GenericUserModel;

@Repository
public interface GenericUserRepository extends CrudRepository<GenericUserModel, Long> {

	Optional<GenericUserModel> findByUserName(String username);
	Boolean existsByUserName(String username);
	Boolean existsByMail(String email);
}
