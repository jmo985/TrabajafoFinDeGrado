package com.sanidadgobcan.tfguc.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sanidadgobcan.tfguc.models.CentroSaludMedicoModel;
import com.sanidadgobcan.tfguc.models.MedicoModel;
import com.sanidadgobcan.tfguc.repositories.CentroSaludMedicoRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/centroSaludMedico")
public class CentroSaludMedicoController {
	
	@Autowired
	CentroSaludMedicoRepository centroSaludMedicoRepository;
	
	@GetMapping("/listar")
	public ArrayList<CentroSaludMedicoModel> obtenerCSM(){
		return (ArrayList<CentroSaludMedicoModel>) centroSaludMedicoRepository.findAll();
	}
	
	@GetMapping("/buscar/{id}")
	public Optional<CentroSaludMedicoModel> buscaCSMPorID(@PathVariable("id") Long id) {
		return centroSaludMedicoRepository.findById(id);
	}
	
	@PostMapping("/crear")
	public CentroSaludMedicoModel registraCSM(@RequestBody CentroSaludMedicoModel cen) {
		return centroSaludMedicoRepository.save(cen);
	}
	
	
	@GetMapping("/buscarPorMedico/{id}")
	public CentroSaludMedicoModel buscaPorMedicoId(@PathVariable("id") Long id) {
		ArrayList<CentroSaludMedicoModel> css= (ArrayList<CentroSaludMedicoModel>) centroSaludMedicoRepository.findAll();
		for(CentroSaludMedicoModel cs:css) {
			if (cs.getCentroSaludModel().getCentroSaludId()==id) {
				return cs;
			}
		}
		return null;
	}
	@DeleteMapping("/eliminar/{id}")
	public void eliminaMedico(@PathVariable ("id") Long id) {
		centroSaludMedicoRepository.deleteById(id);
	
	}


}
