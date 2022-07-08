package com.sanidadgobcan.tfguc.controllers;

import java.util.ArrayList;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.CentroSaludModel;
import com.sanidadgobcan.tfguc.models.CitaModel;
import com.sanidadgobcan.tfguc.models.HistorialMedicoModel;
import com.sanidadgobcan.tfguc.models.MedicoModel;
import com.sanidadgobcan.tfguc.models.UsuarioModel;
import com.sanidadgobcan.tfguc.repositories.UsuarioRepository;
import com.sanidadgobcan.tfguc.services.UsuarioService;

import Config.ComprarCS;
import Config.compararUsuarios;

import org.springframework.security.crypto.password.PasswordEncoder;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping("/listar")
	public ResponseEntity<List<UsuarioModel>> obtenerUsuario(){
		List<UsuarioModel> users= (ArrayList<UsuarioModel>) usuarioRepository.findAll();
		java.util.Collections.sort(users, new compararUsuarios());
		return ResponseEntity.ok(users);
	}
	
	
	
	@SuppressWarnings("unchecked")
	@GetMapping("/buscar/{id}")
	public ResponseEntity<Optional<UsuarioModel>> buscaUsuarioPorID(@PathVariable("id") Long id) {
		Optional<UsuarioModel> user= usuarioRepository.findById(id);
		if(user.isPresent()) {
			return ResponseEntity.ok(user);
		}else {
			return (ResponseEntity<Optional<UsuarioModel>>) ResponseEntity.notFound();
		}
	}
	
	
	
	@PostMapping("/crear")
	public ResponseEntity<UsuarioModel> registraUsuario(@RequestBody UsuarioModel usuario) {
		
		UsuarioModel user = usuario;
		user.setPassword(encoder.encode(usuario.getPassword()));
		usuarioRepository.save(user);
		return ResponseEntity.ok(user);
	}
	
	
	
	
	@PatchMapping("/actualizaUsuario/{id}")
	public ResponseEntity<UsuarioModel> actualizaUsuario(@PathVariable ("id") Long id , @RequestBody  Map<String, String> datos) {
		
		System.out.println(datos.get("nombre"));
		System.out.println(datos.get("apellidos"));
		System.out.println(datos.get("telefono"));
		System.out.println(datos.get("mail"));
		
		Optional<UsuarioModel> user1 = usuarioRepository.findById(id);
		
		if(user1.isPresent()) {	
			UsuarioModel user= user1.get();
			user.setApellidos(datos.get("apellidos"));
			user.setNombre(datos.get("nombre"));
			user.setTelefono(datos.get("telefono"));
			user.setMail(datos.get("mail"));
			return ResponseEntity.ok(usuarioRepository.save(user));
		}else {
			 return  (ResponseEntity<UsuarioModel>) ResponseEntity.notFound();
		}
	}
	
	@GetMapping("/buscar/{id}/historialMedico")
	public ResponseEntity<HistorialMedicoModel> verHistorialUsuario(@PathVariable ("id") Long id){
		
		Optional<UsuarioModel> user=usuarioRepository.findById(id);
		
		
		HistorialMedicoModel hm= user.get().getHistorialMedico();
		return ResponseEntity.ok(hm);
	
	}
	
	@GetMapping("/buscar/{id}/medico")
	public ResponseEntity<MedicoModel> verMedicoUsuario(@PathVariable ("id") Long id){
		MedicoModel med= usuarioService.verMedicoAsignado(id);
		if(med==null) {
			return (ResponseEntity<MedicoModel>) ResponseEntity.notFound();
		}else {
			return ResponseEntity.ok(med);
		}
	}
	
	@GetMapping("/buscar/{id}/centroSalud")
	public ResponseEntity<CentroSaludModel> verCSUsuario(@PathVariable ("id") Long id){
		CentroSaludModel cs= usuarioService.verCSAsignado(id);
		if(cs==null) {
			return (ResponseEntity<CentroSaludModel>) ResponseEntity.notFound();
		}else {
			return ResponseEntity.ok(cs);
		}
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/buscarUserName/{username}")
	public ResponseEntity<Optional<UsuarioModel>> buscaUsuarioPorID(@PathVariable("username") String username) {
		Optional<UsuarioModel> user= usuarioRepository.findByUserName(username);
		if(user.isPresent()) {
			return ResponseEntity.ok(user);
		}else {
			return (ResponseEntity<Optional<UsuarioModel>>) ResponseEntity.notFound();
		}
	}
	
	@DeleteMapping("/eliminar/{id}")
	public void eliminaUsuario(@PathVariable ("id") Long id) {
		usuarioRepository.deleteById(id);
	
	}
	
}

