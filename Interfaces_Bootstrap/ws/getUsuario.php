<?php
require_once __DIR__ . "/models/User.php";
require_once __DIR__ . "/models/response.php";
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$id = $_GET['id'] ?? "";
//$newUser = new User("", "", "", "", "", "", "");

if (empty($id)) {
    echo User::listaUsuarios("", "", "", "", "", "todos", "ultima");
    return;
}

$user = User::getUsuario($id);
if ($user !== null) {
    $response = new Response(true, "Se ha encontrado al alumno con el id " . $id, $user->toJson());
} else {
    $response = new Response(false, "No se ha encontrado al alumno con el id " . $id, null);
}

echo $response->toJson();


?>