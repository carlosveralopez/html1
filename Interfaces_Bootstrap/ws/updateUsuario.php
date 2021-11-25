<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once(__DIR__ . "/models/User.php");

$id = $_POST['id'] ?? "";
$nombre = $_POST['nombre'] ?? "";
$apellidos = $_POST['apellidos'] ?? "";
$email = $_POST['email'] ?? "";
$contrasena = $_POST['passwd'] ?? "";
$telefono = $_POST['tlf'] ?? "";
$sexo = $_POST['sexo'] ?? "";
$fecha = $_POST['fecha'] ?? "";

$newUser = new User($nombre, $apellidos, $email, $contrasena, $telefono, $sexo, $fecha);
echo $newUser->updateUsuario($id);
