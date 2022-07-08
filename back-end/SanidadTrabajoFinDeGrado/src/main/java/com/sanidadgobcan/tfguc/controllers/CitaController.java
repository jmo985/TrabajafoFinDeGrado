package com.sanidadgobcan.tfguc.controllers;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.CitaModel;
import com.sanidadgobcan.tfguc.repositories.CitaRepository;
import com.sanidadgobcan.tfguc.services.CitaService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/cita")
public class CitaController {
	
	@Autowired
	CitaRepository citaRepository;
	@Autowired
	CitaService citaService;
	
	@GetMapping("/listar")
	public ArrayList<CitaModel> obtenerCita(){
		return (ArrayList<CitaModel>) citaRepository.findAll();
	}
	
	@GetMapping("/buscar/{id}")
	public Optional<CitaModel> buscaCitaPorID(@PathVariable("id") Long id) {
		return citaRepository.findById(id);
	}
	
	@PostMapping("/crear")
	public CitaModel registraCita(@RequestBody CitaModel cita) {
	
		return citaRepository.save(cita);
	}
	
	@GetMapping("/listar/pasadasUsuario/{id}")
	public ArrayList<CitaModel> verCitasPasadasUsuario(@PathVariable ("id") Long id){
		return citaService.verCitasPasadaUsuario(id);
	}
	
	@GetMapping("/listar/proximasUsuario/{id}")
	public ArrayList<CitaModel> verCitasProximasUsuario(@PathVariable ("id") Long id){
		return citaService.verCitasProximasUsuario(id);
	}
	
	@GetMapping("/listar/proximasMedico/{id}")
		public ArrayList<CitaModel> verCitasMedico(@PathVariable Long id){
			return citaService.verCitasMedico(id);
	}
	@GetMapping("/listar/usuario/{id}")
	public ResponseEntity<ArrayList<CitaModel>>  verCitasUsuario(@PathVariable ("id") Long id){
		return   ResponseEntity.ok(citaService.verCitasUsuario(id));        
	}
	
	@DeleteMapping("/eliminar/{id}")
	public void eliminaCita(@PathVariable ("id") Long id) {
		citaRepository.deleteById(id);
	
	}
}
	

