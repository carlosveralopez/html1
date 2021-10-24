<?php
require 'IToJson.php';
require 'Model/alumno.php';
require "Conexion.php";






class modificarUsuario extends Conexion
{

	public function __construct()
	{



		parent::__construct(); //llamamos al constructor de la clase padre

	}

	public function modificarUsuario($alu)
	{
		$id = $alu->getId();
		$sexo = $alu->getSexo();
		$telefono = $alu->getTelefono();
		$email = $alu->getEmail();
		$nombre = $alu->getNombre();
		$apellidos = $alu->getApellidos();
		$fecha_nacimiento = $alu->getFecha_nacimiento();
		$password = $alu->getPassword();
		if ($id == "" || $nombre == "" || $apellidos == "" || $fecha_nacimiento == "" || $password = "" || $sexo == "" || $telefono == "" || $email == "") {
		} else {
			//$user=new Usuario($nombre, $apellidos, $fecha_nacimiento, $password);

			$sql = "update alumno set nombre=:n, apellidos=:a, fecha_nacimiento=:f, password=:p, sexo=:s, telefono=:t, email=:e WHERE id = :id;";
			$sentencia = $this->conexion_db->prepare($sql);

			$sentencia->bindParam(':i', $id);
			$sentencia->bindParam(':n', $nombre);
			$sentencia->bindParam(':a', $apellidos);
			$sentencia->bindParam(':t', $telefono);
			$sentencia->bindParam(':e', $email);
			$sentencia->bindParam(':s', $sexo);
			$sentencia->bindParam(':f', $fecha_nacimiento);
			$sentencia->bindParam(':p', $password);

			$sentencia->execute();
			$sentencia->closeCursor();

			$this->conexion_db = null;
		}
	}
}
