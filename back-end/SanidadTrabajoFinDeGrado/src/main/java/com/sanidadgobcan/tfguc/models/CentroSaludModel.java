package  com.sanidadgobcan.tfguc.models;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "centrosalud")
public class CentroSaludModel {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long centroSaludId;
    @Column(nullable = false, length= 50)
    private String nombre;
    @Column(nullable = false, length = 50)
    private String direccion;
    @Column(nullable = false, length = 15)
    private String telefono;
    @Column(nullable = false, length = 50, name= "horaApertura")
    private String horaApertura;
    @Column(nullable = false, length = 50, name= "horaCierre")
    private String horaCierre;
    @Column(nullable = false)
    private boolean urgencias;
    
    @JsonIgnore
    @OneToMany(mappedBy="centroSaludModel", cascade = CascadeType.REMOVE)
    private Set<CentroSaludMedicoModel> centroSaludMedico = new HashSet<>();

	public Long getCentroSaludId() {
		return centroSaludId;
	}

	public void setCentroSaludId(Long centroSaludId) {
		this.centroSaludId = centroSaludId;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getHoraApertura() {
		return horaApertura;
	}

	public void setHoraApertura(String horaApertura) {
		this.horaApertura = horaApertura;
	}

	public String getHoraCierre() {
		return horaCierre;
	}

	public void setHoraCierre(String horaCierre) {
		this.horaCierre = horaCierre;
	}

	public boolean isUrgencias() {
		return urgencias;
	}

	public void setUrgencias(boolean urgencias) {
		this.urgencias = urgencias;
	}

	public Set<CentroSaludMedicoModel> getCentroSaludMedico() {
		return centroSaludMedico;
	}

	public void setCentroSaludMedico(Set<CentroSaludMedicoModel> centroSaludMedico) {
		this.centroSaludMedico = centroSaludMedico;
	}




    
}


