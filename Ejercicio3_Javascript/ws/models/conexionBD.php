<?php


class Conexion
{
  
  

    private static $instance = null;
    private $host = "localhost";
    private $dbname = "colegio";
    private $user = "mamp";
    private $password = "root";
    private $conexion = null;


    private function __construct()
    {

        $this->conexion=new PDO('mysql:host=localhost; dbname=colegio','root','');

        $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);//reporte de errores y excepciones

        $this->conexion->exec("SET CHARACTER SET utf8");
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new Conexion();
        }
        return self::$instance;
    }

    public function getConnection()
    {
        return $this->conexion;
    }

}