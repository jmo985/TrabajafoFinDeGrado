package  com.sanidadgobcan.tfguc.models;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@DiscriminatorValue(value= "USUARIO")
@Table(name = "usuario")
public class UsuarioModel extends GenericUserModel {


    @Column(nullable = false, length = 12)
    private String telefono;
    
    @Column(unique = true, nullable = false, length = 15, name="numero_ss")
    private String numeroSS;
    
    @JsonIgnore
    @OneToOne(mappedBy = "usuarioModelHistorial")
    private HistorialMedicoModel historialMedico;
    
    @ManyToOne
    @JoinColumn(name = "centrosalud_medico_id")
    private CentroSaludMedicoModel centroSaludMedicoModel;
       
    @JsonIgnore
    @OneToMany(mappedBy="usuarioModel", cascade = CascadeType.REMOVE)
    private Set<CitaModel> citaModel = new HashSet<>();

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getNumeroSS() {
		return numeroSS;
	}

	public void setNumeroSS(String numeroSS) {
		this.numeroSS = numeroSS;
	}

	public HistorialMedicoModel getHistorialMedico() {
		return historialMedico;
	}

	public void setHistorialMedico(HistorialMedicoModel historialMedico) {
		this.historialMedico = historialMedico;
	}

	public CentroSaludMedicoModel getCentroSaludMedicoModel() {
		return centroSaludMedicoModel;
	}

	public void setCentroSaludMedicoModel(CentroSaludMedicoModel centroSaludMedicoModel) {
		this.centroSaludMedicoModel = centroSaludMedicoModel;
	}

	public Set<CitaModel> getCitaModel() {
		return citaModel;
	}

	public void setCitaModel(Set<CitaModel> citaModel) {
		this.citaModel = citaModel;
	}

    
    

    
    
}