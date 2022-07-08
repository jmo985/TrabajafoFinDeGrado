package Config;

import java.util.Comparator;

import com.sanidadgobcan.tfguc.models.UsuarioModel;

public class compararUsuarios implements Comparator<UsuarioModel> {

	@Override
	public int compare(UsuarioModel o1, UsuarioModel o2) {
		if (o1.getApellidos().compareToIgnoreCase(o2.getApellidos())<0) {
			return -1;
		
		}else if(o1.getApellidos().compareToIgnoreCase(o2.getApellidos())<0) {
			return 0;
		}else {
		return 1;
		}
	}

}
