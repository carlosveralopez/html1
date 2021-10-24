<?php
require 'IToJson.php';
require 'Model/Usuario.php';
require 'crearUsuario2.php';
require  'deleteUsuario.php';
require 'getUsuario.php';
require 'modificarUsuario.php';





$id = $_POST['id'];
$sexo = $_POST['sexo'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$password = $_POST['password'];
$alu = new alumno($this->id, $this->nombre, $this->apellidos, $this->telefono, $this->password, $this->email, $this->sexo, $this->fecha_nacimiento);

if (isset($_POST['get'])) get($id);
if (isset($_POST['modif'])) modif($alu);
if (isset($_POST['del'])) delete($id);
if (isset($_POST['crear'])) crear($alu);;






function delete($id)
{
    $del = new deleteUsuario();
    $del->deleteUsuario($id);
}

function get($id)
{

    $get = new getUsuario();
    $get->getUsuario($id);
}

function modif($alu)
{
    $modif = new modificarUsuario();
    $modif->modificarUsuario($alu);
}

function crear($alu)
{
    $crear = new crearUsuario2();
    $crear->crearUsuario($alu);
}
