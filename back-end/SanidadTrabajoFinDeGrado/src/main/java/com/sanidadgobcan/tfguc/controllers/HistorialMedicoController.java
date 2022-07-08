package com.sanidadgobcan.tfguc.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.HistorialMedicoModel;
import com.sanidadgobcan.tfguc.repositories.HistorialMedicoRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/historialMedico")
public class HistorialMedicoController {

	@Autowired
	HistorialMedicoRepository historialMedicoRepository;
	
	@GetMapping("/listar")
	public ArrayList<HistorialMedicoModel> obtenerHM(){
		return (ArrayList<HistorialMedicoModel>) historialMedicoRepository.findAll();
	}
	
	@GetMapping("/buscar/{id}")
	public Optional<HistorialMedicoModel> buscaHMPorID(@PathVariable("id") Long id) {
		return historialMedicoRepository.findById(id);
	}
	
	@PostMapping("/crear")
	public HistorialMedicoModel registraHM(@RequestBody HistorialMedicoModel hm) {
		return historialMedicoRepository.save(hm);
	}
}
