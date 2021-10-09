<?php
require 'IToJson.php';
require 'Model/Usuario.php';


$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$telefono=$_POST['telefono'];
$email=$_POST['email'];
$sexo=$_POST['sexo'];

$user=new Usuario($nombre, $apellido, $telefono, $email, $sexo);


$nombre="usuario.txt";
$modo="a+";
var_dump($user);

$file=fopen($nombre,$modo);

fwrite($file, $user->toString());

fclose($file);




?>