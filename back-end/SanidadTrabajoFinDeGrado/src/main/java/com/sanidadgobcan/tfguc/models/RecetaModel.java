/*
 * package com.sanidadgobcan.tfguc.models;
 * 
 * import java.sql.Date;
 * 
 * import javax.persistence.Column; import javax.persistence.Entity; import
 * javax.persistence.GeneratedValue; import javax.persistence.GenerationType;
 * import javax.persistence.Id; import javax.persistence.JoinColumn; import
 * javax.persistence.ManyToOne; import javax.persistence.Table;
 * 
 * @Entity
 * 
 * @Table(name = "receta") public class RecetaModel {
 * 
 * @Id
 * 
 * @GeneratedValue(strategy = GenerationType.IDENTITY)
 * 
 * @Column(unique = true, nullable = false) private Long recetaId;
 * 
 * @Column(nullable = false, name = "descripcion") private String descripcion;
 * 
 * @Column(nullable = false, name = "fecha") private Date fechaDeReceta;
 * 
 * 
 * @ManyToOne
 * 
 * @JoinColumn(name = "historial_id") private HistorialMedicoModel
 * historialMedicoModel;
 * 
 * 
 * 
 * public Long getRecetaId() { return recetaId; }
 * 
 * public void setRecetaId(Long recetaId) { this.recetaId = recetaId; }
 * 
 * public String getDescripcion() { return descripcion; }
 * 
 * public void setDescripcion(String descripcion) { this.descripcion =
 * descripcion; }
 * 
 * public Date getFechaDeReceta() { return fechaDeReceta; }
 * 
 * public void setFechaDeReceta(Date fechaDeReceta) { this.fechaDeReceta =
 * fechaDeReceta; }
 * 
 * 
 * 
 * }
 */