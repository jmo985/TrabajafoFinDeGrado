package Config;
import java.util.Comparator;

import com.sanidadgobcan.tfguc.models.CitaModel;
public class CompararCitas implements Comparator<CitaModel>{

	@Override
	public int compare(CitaModel o1, CitaModel o2) {
		if (o1.getFecha().after(o2.getFecha())) {
			return -1;
		
		}else if(o1.getFecha().after(o2.getFecha())) {
			return 0;
		}else {
		return 1;
		}
	}

}
