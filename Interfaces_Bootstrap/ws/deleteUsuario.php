<?php

require_once(__DIR__ . "/models/User.php");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$id = $_POST['id'] ?? "";
$newUser = new User("", "", "", "", "", "", "");

if ($id !== "") {
    echo $newUser->deleteUsuario($id);
}


?>