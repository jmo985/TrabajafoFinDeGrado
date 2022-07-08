package com.sanidadgobcan.tfguc.models;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name= "rol", discriminatorType = DiscriminatorType.STRING )
public class GenericUserModel {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long userId;
	
	 @Column(unique = true, nullable = false, length = 50, name="username")
	private String userName;
	 
	 @Column(nullable = false, length = 255, name="password")
	private String password;
	 
	 @Column(unique = true, nullable = false, length = 50, name="mail")
	private String mail;
	 
	 @Column(nullable = false, length = 50, name="nombre")
	private String nombre;
	 
	 @Column(nullable = false, length = 50, name="apellidos")
	private String apellidos;
	
	
	@Column(name="status", nullable = false, length = 20 )
    @Enumerated(value = EnumType.STRING)
	private Role rol;
	
	


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getMail() {
		return mail;
	}


	public void setMail(String mail) {
		this.mail = mail;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellidos() {
		return apellidos;
	}


	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}


	public Role getRol() {
		return rol;
	}


	public void setRol(Role rol) {
		this.rol = rol;
	}
	
	
	
	
	
}
