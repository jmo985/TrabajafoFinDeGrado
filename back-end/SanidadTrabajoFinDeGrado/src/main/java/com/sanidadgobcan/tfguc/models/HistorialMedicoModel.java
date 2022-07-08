package com.sanidadgobcan.tfguc.models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name = "historial_medico")
public class HistorialMedicoModel {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
	private Long historialId;
	
  
   // @OneToMany(mappedBy="historialMedicoModel")
   // @JsonIgnore
	@Column(name="recetas")
    private String recetasMedico;
    
 
	@OneToOne
	@JoinColumn(name="usuario")
    private UsuarioModel usuarioModelHistorial;

    
    
	public Long getHistorialId() {
		return historialId;
	}

	public void setHistorialId(Long historialId) {
		this.historialId = historialId;
	}

	

	public UsuarioModel getUsuarioModel() {
		return usuarioModelHistorial;
	}

	public void setUsuarioModel(UsuarioModel usuarioModel) {
		this.usuarioModelHistorial = usuarioModel;
	}
    
    
    
    
}
