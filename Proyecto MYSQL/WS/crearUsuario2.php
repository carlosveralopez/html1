<?php
require 'IToJson.php';
require 'Model/alumno.php';
require "Conexion.php";






class crearUsuario2 extends Conexion{
  
	public function __construct(){
       
       
        
		parent::__construct(); //llamamos al constructor de la clase padre
		
		
		} 
        
	public function crearUsuario($alu){
        $id=$alu -> getId();
		$sexo=$alu-> getSexo();
		$telefono=$alu-> getTelefono();
		$email=$alu-> getEmail();
		$nombre=$alu-> getNombre();
		$apellidos=$alu-> getApellidos();
		$fecha_nacimiento=$alu-> getFecha_nacimiento();
		$password=$alu-> getPassword();

		

        $sql="insert into alumno(id, nombre, apellidos, telefono, email, sexo, password, fecha_nacimiento)
        values (':i', ':n', ':a', ':t', ':e', ':s', ':p', ':f')";

		$sentencia=$this->conexion_db->prepare($sql);
        $sentencia->bindParam(':i',$id);
        $sentencia->bindParam(':n',$nombre);
        $sentencia->bindParam(':a',$apellidos);
        $sentencia->bindParam(':t',$telefono);
        $sentencia->bindParam(':e',$email);
        $sentencia->bindParam(':s',$sexo);
        $sentencia->bindParam(':f',$fecha_nacimiento);
        $sentencia->bindParam(':p',$password);

        if($sentencia->execute()){
            $file=fopen("usuario.txt", "a+");
        
        fwrite($file, $alu->toJson(true,""));
        
        fclose($file);
        $sentencia->closeCursor();
        $this->conexion_db=null;
        }else{
            $file=fopen("usuario.txt", "a+");
        
            fwrite($file, $alu->toJson(False,$id));
            
            fclose($file);
            $sentencia->closeCursor();
            $this->conexion_db=null;
        }
		
		}
        
        
     
	}






?>