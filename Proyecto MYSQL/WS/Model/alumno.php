<?php
require "ITojson.php";
class alumno implements IToJson
{
   private $id, $nombre, $apellidos, $telefono, $password, $email, $sexo, $fecha_nacimiento;

   function __construct($id, $nombre, $apellidos, $telefono, $password, $email, $sexo, $fecha_nacimiento)
   {
      $this->setNombre($nombre);
      $this->setApellidos($apellidos);
      $this->setTelefono($telefono);
      $this->setEmail($email);
      $this->setSexo($sexo);
      $this->setFecha_nacimiento($fecha_nacimiento);
      $this->setId($id);
      $this->setPassword($password);
   }

   public function setFecha_nacimiento($fecha_nacimiento)
   {
      $this->fecha_nacimiento = $fecha_nacimiento;

      return $this;
   }

   public function getFecha_nacimiento()
   {
      return $this->fecha_nacimiento;
   }

   public function setPassword($password)
   {
      $this->password = $password;

      return $this;
   }

   public function getPassword()
   {
      return $this->password;
   }

   public function setId($id)
   {
      $this->id = $id;

      return $this;
   }

   public function getId()
   {
      return $this->id;
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

   public function setApellidos($apellidos)
   {
      $this->apellidos = $apellidos;

      return $this;
   }

   public function getApellidos()
   {
      return $this->apellidos;
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
      return ", ID: " . $this->getId() . "Nombre: " . $this->getNombre() . ", Apellidos: " . $this->getApellidos() . ", Email: " . $this->getEmail()
         . ", sexo: " . $this->getSexo() . ", Telefono: " . $this->getTelefono() . ", Fecha Nacimiento: " . $this->getFecha_nacimiento() . ", Password: " . $this->getPassword();
   }




   public function toJson($bool, $id)
   {
      if ($bool == true) {
         return "Succes: True";
         return ("Usuario obtenido correctamente");
         return json_encode([
            'id' => $this->getId(),
            'nombre' => $this->getNombre(),
            'apellido' => $this->getApellidos(),
            'telefono' => $this->getTelefono(),
            'sexo' => $this->getSexo(),
            'email' => $this->getEmail(),
            'fecha nacimiento' => $this->getFecha_nacimiento(),
            'password' => $this->getPassword()
         ]);
      } else if ($bool == false) {
         return "Succes: False";
         return ("Usuario con ID:" . $id . "no encontrado");
      }
   }
}
