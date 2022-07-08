package  com.sanidadgobcan.tfguc.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "cita")
public class CitaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long citaModelid;

    @Column(length= 100)
    private String comentario;
    
	/*
	 * @Column(nullable = false, name= "inicio_cita") private Date inicioCita;
	 * 
	 * @Column(nullable = false, name = "fin_cita") private Date finCita;
	 * 
	 * @Column(nullable=false) private int duracion;
	 */

    @Column(length= 100)
    private Date fecha;
    
    @ManyToOne
    @JoinColumn(name = "timeslotId")
    private TimeslotModel timeslot;
    
    @ManyToOne
    @JoinColumn(name = "tipocita")
    private TipoCitaModel tipoCitaModel;
    
    @ManyToOne
    @JoinColumn(name = "usuario")
    private UsuarioModel usuarioModel;

	public Long getCitaModelid() {
		return citaModelid;
	}

	public void setCitaModelid(Long citaModelid) {
		this.citaModelid = citaModelid;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	/*
	 * public Date getInicioCita() { return inicioCita; }
	 * 
	 * public void setInicioCita(Date inicioCita) { this.inicioCita = inicioCita; }
	 * 
	 * public Date getFinCita() { return finCita; }
	 * 
	 * public void setFinCita(Date finCita) { this.finCita = finCita; }
	 * 
	 * public int getDuracion() { return duracion; }
	 * 
	 * public void setDuracion(int duracion) { this.duracion = duracion; }
	 */
	public TipoCitaModel getTipoCitaModel() {
		return tipoCitaModel;
	}

	public void setTipoCitaModel(TipoCitaModel tipoCitaModel) {
		this.tipoCitaModel = tipoCitaModel;
	}

	public UsuarioModel getUsuarioModel() {
		return usuarioModel;
	}

	public void setUsuarioModel(UsuarioModel usuarioModel) {
		this.usuarioModel = usuarioModel;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public TimeslotModel getTimeslot() {
		return timeslot;
	}

	public void setTimeslot(TimeslotModel timeslot) {
		this.timeslot = timeslot;
	}


  



}
