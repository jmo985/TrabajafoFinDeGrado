package com.sanidadgobcan.tfguc.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "timeslot")
public class TimeslotModel {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(unique = true, nullable = false)
		private Long timeslotId;
		@Column(nullable = false, name="horaInicio")
		private String horaInicio;
		@Column(nullable = false, name="horaFin")
		private String horaFin;

		@JsonIgnore
		@OneToMany(mappedBy = "timeslot", cascade = CascadeType.REMOVE)
		private Set <CitaModel> citaId;

		public Long getTimeslotId() {
			return timeslotId;
		}

		public void setTimeslotId(Long timeslotId) {
			this.timeslotId = timeslotId;
		}

		public String getHoraInicio() {
			return horaInicio;
		}

		public void setHoraInicio(String horaInicio) {
			this.horaInicio = horaInicio;
		}

		public String getHoraFin() {
			return horaFin;
		}

		public void setHoraFin(String horaFin) {
			this.horaFin = horaFin;
		}

		public Set<CitaModel> getCitaId() {
			return citaId;
		}

		public void setCitaId(Set<CitaModel> citaId) {
			this.citaId = citaId;
		}
		
		
}

