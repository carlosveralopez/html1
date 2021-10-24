<?php

class Usuario implements IToJson
{
   private $nombre, $apellido, $telefono, $email, $sexo;
   
   function __construct($nombre, $apellido, $telefono, $email, $sexo)
   {
       $this->setNombre($nombre);
       $this->setApellido($apellido);
       $this->setTelefono($telefono);
       $this->setEmail($email);
       $this->setSexo($sexo);
   }

   public function setNombre($nombre)
   {
      $this->nombre = $nombre;

      return $this;
   }

   public function getNombre()
   {
      return $this->nombre;
   }

   public function setApellido($apellido)
   {
      $this->apellido = $apellido;

      return $this;
   }

   public function getApellido()
   {
      return $this->apellido;
   }

 
   public function setTelefono($telefono)
   {
      $this->telefono = $telefono;

      return $this;
   } 

   public function getTelefono()
   {
      return $this->telefono;
   }

   public function setEmail($email)
   {
      $this->email = $email;

      return $this;
   }

   public function getEmail()
   {
      return $this->email;
   }

   public function setSexo($sexo)
   {
      $this->sexo = $sexo;

      return $this;
   }

   public function getSexo()
   {
      return $this->sexo;
   }


   public function toString()
   {
      return "Nombre: ".$this->getNombre().", Apellidos: ".$this->getApellido().", Email: ".$this->getEmail()
      .", sexo: ".$this->getSexo().", Telefono: ".$this->getTelefono();
   }

   public function toJson()
   {
      return json_encode([
         'nombre' => $this->getNombre(),
         'apellido'=>$this->getApellido(),
         'telefono'=>$this->getTelefono(),
         'sexo'=>$this->getSexo(),
         'email'=>$this->getEmail()
      ]);
   }
}

?>