package  com.sanidadgobcan.tfguc.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@DiscriminatorValue(value= "MEDICO")
@Table(name = "medico")
public class MedicoModel extends GenericUserModel {

 
		@JsonIgnore
	    @OneToMany(mappedBy="medicoModel", cascade = CascadeType.REMOVE)
	    private Set<CentroSaludMedicoModel> centroSaludMedicoModels= new HashSet<>();
		

		public Set<CentroSaludMedicoModel> getCentroSaludMedicoModels() {
			return centroSaludMedicoModels;
		}

		public void setCentroSaludMedicoModels(Set<CentroSaludMedicoModel> centroSaludMedicoModels) {
			this.centroSaludMedicoModels = centroSaludMedicoModels;
		}




}
