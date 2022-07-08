package Config;

import java.util.Comparator;

import com.sanidadgobcan.tfguc.models.CentroSaludModel;
import com.sanidadgobcan.tfguc.models.MedicoModel;

public class CompararMedicos  implements Comparator<MedicoModel>{

	@Override
	public int compare(MedicoModel o1, MedicoModel o2) {
		if (o1.getApellidos().compareToIgnoreCase(o2.getApellidos())<0) {
			return -1;
		
		}else if(o1.getApellidos().compareToIgnoreCase(o2.getApellidos())<0) {
			return 0;
		}else {
		return 1;
	}
	}

}
