package Config;

import java.util.Comparator;

import com.sanidadgobcan.tfguc.models.CentroSaludModel;


public class ComprarCS implements Comparator<CentroSaludModel> {

	@Override
	public int compare(CentroSaludModel o1, CentroSaludModel o2) {
		if (o1.getNombre().compareToIgnoreCase(o2.getNombre())<0) {
			return -1;
		
		}else if(o1.getNombre().compareToIgnoreCase(o2.getNombre())<0) {
			return 0;
		}else {
		return 1;
		}
	}
	
}
