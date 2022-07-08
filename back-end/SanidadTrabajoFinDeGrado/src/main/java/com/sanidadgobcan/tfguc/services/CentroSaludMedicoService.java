package com.sanidadgobcan.tfguc.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanidadgobcan.tfguc.models.CentroSaludMedicoModel;
import com.sanidadgobcan.tfguc.models.CentroSaludModel;
import com.sanidadgobcan.tfguc.models.TimeslotModel;
import com.sanidadgobcan.tfguc.models.UsuarioModel;
import com.sanidadgobcan.tfguc.repositories.CentroSaludMedicoRepository;
import com.sanidadgobcan.tfguc.repositories.CentroSaludRepository;
import com.sanidadgobcan.tfguc.repositories.UsuarioRepository;

@Service
public class CentroSaludMedicoService {

	
	@Autowired
	CentroSaludMedicoRepository centroSaludMedicoRepository;
	
	public ArrayList<UsuarioModel> verUsuarios(Long id){
		ArrayList<CentroSaludMedicoModel> csms= (ArrayList<CentroSaludMedicoModel> )centroSaludMedicoRepository.findAll();
		for(CentroSaludMedicoModel csm:csms ) {
			if(csm.getCentroSaludMedicoModelid()==id) {
				ArrayList<UsuarioModel> usuarioModel = (ArrayList<UsuarioModel>) csm.getUsuarioModel();
				return usuarioModel;
			}
		}
		return null;
	}
	
	
}
