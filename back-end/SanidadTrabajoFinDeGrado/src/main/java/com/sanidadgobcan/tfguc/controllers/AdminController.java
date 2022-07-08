package com.sanidadgobcan.tfguc.controllers;

import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.AdminModel;
import com.sanidadgobcan.tfguc.models.MedicoModel;
import com.sanidadgobcan.tfguc.repositories.AdminRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminRepository adminRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	
	@GetMapping("/listar")
	public ArrayList<AdminModel> obtenerAdmin(){
		return (ArrayList<AdminModel>) adminRepository.findAll();
	}
	
	@GetMapping("/buscar/{id}")
	public Optional<AdminModel> buscaAdminPorID(@PathVariable("id") Long id) {
		return adminRepository.findById(id);
	}
	
	@PostMapping("/crear")
	public AdminModel registraAdmin(@RequestBody AdminModel admin) {
		
		AdminModel adm=admin;
		admin.setPassword(encoder.encode(admin.getPassword()));
		return adminRepository.save(adm);
	}
	
	
	@PatchMapping("/actualizaAdmin/{id}")
	public AdminModel actualizaUsuarioModel(@PathVariable ("id") Long id , @RequestBody  Map<String, String> datos){
Optional<AdminModel> user1 = adminRepository.findById(id);
		
		if(user1.isPresent()) {	
			AdminModel user= user1.get();
			user.setApellidos(datos.get("apellidos"));
			user.setNombre(datos.get("nombre"));
			user.setMail(datos.get("mail"));
			return adminRepository.save(user);
		}else {
			return null;
		}
	
	}
}
