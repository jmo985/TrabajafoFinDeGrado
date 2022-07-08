package  com.sanidadgobcan.tfguc.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tipocita")
public class TipoCitaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long tipoDeCitaModel;
    
    @Column(nullable = false, length = 50)
    private String nombre;

    @Column(length = 100)
    private String descripcion;
    
    @JsonIgnore
    @OneToMany(mappedBy="tipoCitaModel", cascade = CascadeType.REMOVE)
    private Set<CitaModel> citaModel = new HashSet<>();
  

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

	public Long getTipoDeCitaModel() {
		return tipoDeCitaModel;
	}

	public void setTipoDeCitaModel(Long tipoDeCitaModel) {
		this.tipoDeCitaModel = tipoDeCitaModel;
	}

	public Set<CitaModel> getCitaModel() {
		return citaModel;
	}

	public void setCitaModel(Set<CitaModel> citaModel) {
		this.citaModel = citaModel;
	}
}
