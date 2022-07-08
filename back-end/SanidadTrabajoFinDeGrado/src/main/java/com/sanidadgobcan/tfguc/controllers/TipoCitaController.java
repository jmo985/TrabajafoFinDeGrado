package com.sanidadgobcan.tfguc.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.TipoCitaModel;
import com.sanidadgobcan.tfguc.repositories.TipoCitaRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/tipoDeCita")
public class TipoCitaController {

	@Autowired
	TipoCitaRepository tipoCitaRepository;
	
	@GetMapping("/listar")
	public ResponseEntity<ArrayList<TipoCitaModel>> obtenerTipoCita(){
		return ResponseEntity.ok((ArrayList<TipoCitaModel>) tipoCitaRepository.findAll());
	}
	
	@GetMapping("/buscar/{id}")
	public ResponseEntity<Optional<TipoCitaModel>> buscaTipoCitaPorID(@PathVariable("id") Long id) {
		return ResponseEntity.ok(tipoCitaRepository.findById(id));
	}
	
	@PostMapping("/crear")
	public ResponseEntity<TipoCitaModel> registraTipoCita(@RequestBody TipoCitaModel tipoCita) {
		return ResponseEntity.ok(tipoCitaRepository.save(tipoCita));  
	}
}
