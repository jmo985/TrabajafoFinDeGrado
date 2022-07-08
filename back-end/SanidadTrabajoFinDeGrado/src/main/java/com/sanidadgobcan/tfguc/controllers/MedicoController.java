package com.sanidadgobcan.tfguc.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.MedicoModel;
import com.sanidadgobcan.tfguc.models.UsuarioModel;
import com.sanidadgobcan.tfguc.repositories.MedicoRepository;

import Config.CompararMedicos;
import Config.compararUsuarios;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/medico")
public class MedicoController {

	@Autowired
	MedicoRepository medicoRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@GetMapping("/listar")
	public ResponseEntity<List<MedicoModel>> obtenerMedicos(){
		List<MedicoModel> medicos = (List<MedicoModel>) medicoRepository.findAll();
		java.util.Collections.sort(medicos, new CompararMedicos());
		return ResponseEntity.ok(medicos);
	}
	
	@GetMapping("/buscar/{id}")
	public Optional<MedicoModel> buscaMedicoPorID(@PathVariable("id") Long id) {
		return medicoRepository.findById(id);
	}
	
	@PostMapping("/crear")
	public MedicoModel registraMedico(@RequestBody MedicoModel medico) {
		
		MedicoModel med=medico;
		med.setPassword(encoder.encode(medico.getPassword()));
		return medicoRepository.save(med);
	}
	
	@PatchMapping("/actualizaMedico/{id}")
	public ResponseEntity<MedicoModel> actualizaMedico(@PathVariable ("id") Long id , @RequestBody  Map<String, String> datos){
		Optional<MedicoModel> user1 = medicoRepository.findById(id);
		
		if(user1.isPresent()) {	
			MedicoModel user= user1.get();
			user.setApellidos(datos.get("apellidos"));
			user.setNombre(datos.get("nombre"));
			user.setMail(datos.get("mail"));
			return ResponseEntity.ok(medicoRepository.save(user));
		}else {
			return (ResponseEntity<MedicoModel>) ResponseEntity.notFound();
		}
	}
	
	@DeleteMapping("/eliminar/{id}")
	public void eliminaMedico(@PathVariable ("id") Long id) {
		medicoRepository.deleteById(id);
	
	}
}
