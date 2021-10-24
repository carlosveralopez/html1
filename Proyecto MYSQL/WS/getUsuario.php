<?php
require "Conexion.php";
require "alumno.php";
class getUsuario extends Conexion
{

    public function __construct()
    {

        parent::__construct(); //llamamos al constructor de la clase padre


    }

    public function getUsuario($id)
    {



        if ($id == null || $id == "") {
            $sql = "select * from alumno;";
        } else {
            $sql = "select * from alumno where id=:id;";
        }
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->bindParam(':i', $id);
        //Comprobamos que hay registros tras ejecutar la consulta
        if ($sentencia->execute()) {

            $resultado = $sentencia->fetchAll();
            for ($i = 0; $i < count($resultado); $i++) {
                $var1 = $resultado[$i]->nombre;
                $var2 = $resultado[$i]->apellidos;
                $var3 = $resultado[$i]->telefono;
                $var4 = $resultado[$i]->email;
                $var5 = $resultado[$i]->sexo;
                $var6 = $resultado[$i]->fecha_nacimiento;
                $var7 = $resultado[$i]->id;
                $var8 = $resultado[$i]->password;
                $alu = new Alumno($var1, $var2, $var3, $var4, $var5, $var6, $var7, $var8);


                $file = fopen("usuario.txt", "a+");

                fwrite($file, $alu->toJson(true, ""));

                fclose($file);
            }

            $sentencia->closeCursor();
            $this->conexion_db = null;
        } else {
            $alu = new Alumno("", "", "", "", "", "", "", "");

            $file = fopen("usuario.txt", "a+");

            fwrite($file, $alu->toJson(false, $id));

            fclose($file);

            $sentencia->closeCursor();
            $this->conexion_db = null;
        }
    }
}
