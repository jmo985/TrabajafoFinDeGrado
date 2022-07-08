package  com.sanidadgobcan.tfguc.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "centrosaludmedico")
public class CentroSaludMedicoModel {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long centroSaludMedicoModelid;
    
    @Column(nullable = false, name = "hora_inicio")
    private String horaInicio;
    
    @Column(nullable = false,  name= "hora_fin")
    private String horaFin;
    

    @ManyToOne
    @JoinColumn(name = "centrosalud_id")
    private CentroSaludModel centroSaludModel;
    
    @ManyToOne
    @JoinColumn(name = "medico_id")
    private MedicoModel medicoModel;
    

    @JsonIgnore
    @OneToMany(mappedBy="centroSaludMedicoModel")
    private Set<UsuarioModel> usuarioModel = new HashSet<>();


	public Long getCentroSaludMedicoModelid() {
		return centroSaludMedicoModelid;
	}


	public void setCentroSaludMedicoModelid(Long centroSaludMedicoModelid) {
		this.centroSaludMedicoModelid = centroSaludMedicoModelid;
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


	public CentroSaludModel getCentroSaludModel() {
		return centroSaludModel;
	}


	public void setCentroSaludModel(CentroSaludModel centroSaludModel) {
		this.centroSaludModel = centroSaludModel;
	}


	public MedicoModel getMedicoModel() {
		return medicoModel;
	}


	public void setMedicoModel(MedicoModel medicoModel) {
		this.medicoModel = medicoModel;
	}


	public Set<UsuarioModel> getUsuarioModel() {
		return usuarioModel;
	}


	public void setUsuarioModel(Set<UsuarioModel> usuarioModel) {
		this.usuarioModel = usuarioModel;
	}
    
}
