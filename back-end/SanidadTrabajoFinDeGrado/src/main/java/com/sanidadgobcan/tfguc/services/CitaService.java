package com.sanidadgobcan.tfguc.services;

import java.sql.Date;
import java.util.*;
import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanidadgobcan.tfguc.models.CentroSaludMedicoModel;
import com.sanidadgobcan.tfguc.models.CitaModel;
import com.sanidadgobcan.tfguc.models.MedicoModel;
import com.sanidadgobcan.tfguc.models.TimeslotModel;
import com.sanidadgobcan.tfguc.models.UsuarioModel;
import com.sanidadgobcan.tfguc.repositories.CentroSaludMedicoRepository;
import com.sanidadgobcan.tfguc.repositories.CitaRepository;
import com.sanidadgobcan.tfguc.repositories.MedicoRepository;
import com.sanidadgobcan.tfguc.repositories.UsuarioRepository;

import Config.CompararCitas;
import io.jsonwebtoken.lang.Collections;

@Service
public class CitaService {

	@Autowired
	UsuarioService usuarioService;
	@Autowired
	CentroSaludMedicoRepository centroSaludMedicoRepository;
	@Autowired
	CitaRepository citaRepository;
	@Autowired
	UsuarioRepository usuarioRepository;
	
	

	public ArrayList<CitaModel> verCitasUsuario(Long idUsuario){
		ArrayList<CitaModel> citas= (ArrayList<CitaModel>) citaRepository.findAll();
		ArrayList<CitaModel> citasAux= new ArrayList<CitaModel>();
		for(CitaModel cita:citas) {
			if(cita.getUsuarioModel().getUserId()==idUsuario) {
				citasAux.add(cita);
			}
		}
		java.util.Collections.sort(citasAux, new CompararCitas());

		return citasAux;
	}
	
	public ArrayList<CitaModel> verCitasPasadaUsuario(Long idUsuario){
		ArrayList<CitaModel> citas= (ArrayList<CitaModel>) citaRepository.findAll();
		ArrayList<CitaModel> citasAux=new ArrayList<CitaModel>();
		Date date=new Date(System.currentTimeMillis());
		
		for(CitaModel cita:citas) {
			if(cita.getFecha().before(date)) {
				citasAux.add(cita);
			}
		}
		java.util.Collections.sort(citasAux, new CompararCitas());
		return citasAux;
	}
	
	public ArrayList<CitaModel> verCitasProximasUsuario(Long idUsuario){
		ArrayList<CitaModel> citas= verCitasUsuario(idUsuario);
		ArrayList<CitaModel> citasAux=new ArrayList<CitaModel>();
		Date date=new Date(System.currentTimeMillis());
		for(CitaModel cita:citas) {
			if(cita.getFecha().after(date)) {
				citasAux.add(cita);
			}
		}
		return citasAux;
	}
	
	
	public ArrayList<CitaModel> verCitasMedico(Long idMedico){
		/*
		 * ArrayList<CentroSaludMedicoModel> csms=(ArrayList<CentroSaludMedicoModel>)
		 * centroSaludMedicoRepository.findAll(); CentroSaludMedicoModel medicoCS= new
		 * CentroSaludMedicoModel(); for(CentroSaludMedicoModel csm:csms) {
		 * if(csm.getMedicoModel().getUserId()==idMedico) { medicoCS=csm; } }
		 * 
		 * @SuppressWarnings("unchecked") ArrayList<UsuarioModel> users=
		 * (ArrayList<UsuarioModel>) medicoCS.getUsuarioModel(); ArrayList<CitaModel>
		 * citas= new ArrayList<CitaModel>(); for(UsuarioModel user:users) {
		 * citas.addAll(user.getCitaModel()); }
		 */
		
		ArrayList<UsuarioModel> users = (ArrayList<UsuarioModel>) usuarioRepository.findAll();
		ArrayList<UsuarioModel> userAux = new ArrayList<UsuarioModel>();
		ArrayList<CitaModel> citas= new ArrayList<CitaModel>();
		for(UsuarioModel u:users) {
			if((usuarioService.verMedicoAsignado(u.getUserId())).getUserId()==idMedico){
				userAux.add(u);
			}
		}
		
		for(UsuarioModel u2:userAux) {
			citas.addAll(verCitasUsuario(u2.getUserId()));
		}
		
		java.util.Collections.sort(citas, new CompararCitas());
		return citas;
		
	}
	
	@SuppressWarnings("deprecation")
	public ArrayList<TimeslotModel> verTimeslotLibresMedico(Long id, Date date){
		ArrayList<CitaModel> citas = usuarioService.verDisponibilidadMedico(id, date);
		ArrayList<TimeslotModel> timeslots = new ArrayList<TimeslotModel>();
		
		
		
		for(CitaModel cita:citas) {
			System.out.println(cita.getFecha());
			System.out.println(date);
			if(cita.getFecha().getDate()== date.getDate() && cita.getFecha().getMonth()==date.getMonth() && cita.getFecha().getYear()==date.getYear()) {
				
				
				if(!(timeslots.contains(cita.getTimeslot()))) {
					timeslots.add(cita.getTimeslot());
				}
		}
		
		
	}
		return timeslots;
}
	
	
	
}
