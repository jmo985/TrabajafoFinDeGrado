package com.sanidadgobcan.tfguc.controllers;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanidadgobcan.tfguc.models.CentroSaludModel;
import com.sanidadgobcan.tfguc.models.MedicoModel;
import com.sanidadgobcan.tfguc.repositories.CentroSaludRepository;
import com.sanidadgobcan.tfguc.services.CentroSaludService;

import Config.CompararCitas;
import Config.ComprarCS;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/centroSalud")
public class CentroSaludController {

	
	@Autowired
	CentroSaludRepository centroSaludRepository;
	@Autowired
	CentroSaludService centroSaludService;
	
	@GetMapping("/listar")
	public ResponseEntity<ArrayList<CentroSaludModel>> obtenerCS(){
		ArrayList<CentroSaludModel> cs = (ArrayList<CentroSaludModel>) centroSaludRepository.findAll();
		java.util.Collections.sort(cs, new ComprarCS());
		return ResponseEntity.ok(cs);
	}
	
	@GetMapping("/buscar/{id}")
	public ResponseEntity<Optional<CentroSaludModel>> buscaCSPorID(@PathVariable("id") Long id) {
		Optional<CentroSaludModel> cs= centroSaludRepository.findById(id);
		if(cs.isPresent()) {
			return ResponseEntity.ok(cs);
		}else {
			return (ResponseEntity<Optional<CentroSaludModel>>) ResponseEntity.notFound();
		}
	}
	
	@PostMapping("/crear")
	public ResponseEntity<CentroSaludModel> registraCS(@RequestBody CentroSaludModel CS) {
		CentroSaludModel cs  = centroSaludRepository.save(CS);
		return ResponseEntity.ok(cs);
	}
	
	@PatchMapping("/actualizaCentroSalud/{id}")
	public ResponseEntity<CentroSaludModel> actualizaCS(@PathVariable("id") Long id, @RequestBody  Map<String, String> datos) {
		Optional<CentroSaludModel> cs  = centroSaludRepository.findById(id);
		if(cs.isPresent()) {
			CentroSaludModel cs2= cs.get();
			cs2.setDireccion("direccion");
			cs2.setNombre(datos.get("nombre"));
			cs2.setTelefono(datos.get("telefono"));
			cs2.setHoraApertura(datos.get("horaApertura"));
			cs2.setHoraCierre(datos.get("horaCierre"));
			if(datos.get("urgencias").equals("true")) {
				cs2.setUrgencias(true);
			}
			if(datos.get("urgencias").equals("false")) {
				cs2.setUrgencias(false);
			}
			
			return ResponseEntity.ok(centroSaludRepository.save(cs2));
		}
		else {
			return (ResponseEntity<CentroSaludModel>) ResponseEntity.notFound();
		}
	}
	
	@GetMapping("/urgencias")
	public ResponseEntity<ArrayList<CentroSaludModel>> verCSUrgencias(){
		ArrayList<CentroSaludModel> cs= centroSaludService.verCSUrgencias();
		return ResponseEntity.ok(cs);
	}
	@DeleteMapping("/eliminar/{id}")
	public void eliminaCS(@PathVariable ("id") Long id) {
		centroSaludRepository.deleteById(id);
	
	}

}
