<?php
require_once __DIR__ . "/../interfaces/ItoJson.php";
require_once __DIR__ . "/../models/response.php";
require_once __DIR__ . "/../models/conexionBD.php";

class User implements ItoJson
{
    public $id;

    public $nombre;

    public $apellidos;

    public $email;

    public $contrasena;

    public $telefono;

    public $sexo;

    public $fecha_nacimiento;

    function __construct($nombre, $apellidos, $email, $contrasena, $telefono, $sexo, $fecha_nacimiento, $id = 0)
    {
        $this->setNombre($nombre);
        $this->setApellidos($apellidos);
        $this->setEmail($email);
        $this->setContrasena($contrasena);
        $this->setTelefono($telefono);
        $this->setSexo($sexo);
        $this->setFechaNacimiento($fecha_nacimiento);
        $this->setId($id);
    }

    public static function listaUsuarios($nombre, $apellidos, $email, $sexo, $fecha_nacimiento, $registrosPagina, $opcion)
    {
        $response = new Response(false, "", null);
        try {
            $params = array();
            $conexion = Conexion::getInstance();
            $cnn = $conexion->getConnection();
            $sql = 'SELECT count(*) as total FROM ALUMNO';
            if (!empty($fecha_nacimiento) || !empty($nombre) || !empty($apellidos) || !empty($email) || !empty($sexo)) {
                $sql .= ' Where true ';
            }

            if (!empty($nombre)) {
                $sql .= ' and nombre like :nombre';
                $params[':nombre'] = "%" . $nombre . "%";
            }

            if (!empty($apellidos)) {
                $sql .= ' and apellidos like :apellidos';
                $params[':apellidos'] = "%" . $apellidos . "%";
            }

            if (!empty($email)) {
                $sql .= ' and email like :email';
                $params[':email'] = "%" . $email . "%";
            }

            if (!empty($sexo)) {
                $sql .= ' and sexo = :sexo';
                $params[':sexo'] = $sexo;
            }

            if (!empty($fecha_nacimiento)) {
                $sql .= ' and fecha_nacimiento >= :fecha';
                $params[':fecha'] = '\'' . $fecha_nacimiento . '\'';
            }

            $stmt = $cnn->prepare($sql);
            $stmt->execute($params);

            $numeroRegistros = 0;
            foreach ($datos = $stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $numeroRegistros = $row['total'];

            }
            $sql = "";
            $params = array();
            if ($registrosPagina !== "todos") {

                $total_paginas = ceil($numeroRegistros / $registrosPagina);
            } else {
                $total_paginas = 1;
            }
            if ($opcion === "ultima") {
                $numeroPagina = $total_paginas;
            }
            if ($opcion === "primera") {
                $numeroPagina = 1;
            }
            if ($opcion === "anterior" && $numeroPagina !== 1) {
                $numeroPagina--;
            }
            if ($opcion === "siguiente" && $numeroPagina < $total_paginas) {
                $numeroPagina++;
            }
            $inicio = 0;

            if ($registrosPagina !== "todos") {
                $inicio = ($numeroPagina - 1) * $registrosPagina;
            }
            $params = [];
            //$conexion = Conexion::getInstance();
            //$cnn = $conexion->getConnection();
            $sql = 'SELECT id, nombre, apellidos, password, email, sexo, fecha_nacimiento, telefono FROM ALUMNO';

            if (!empty($fecha_nacimiento) || !empty($nombre) || !empty($apellidos) || !empty($email) || !empty($sexo)) {
                $sql .= ' Where true ';
            }

            if (!empty($nombre)) {
                $sql .= ' and nombre like :nombre';
                $params[':nombre'] = "%" . $nombre . "%";
            }

            if (!empty($apellidos)) {
                $sql .= ' and apellidos like :apellidos';
                $params[':apellidos'] = "%" . $apellidos . "%";
            }

            if (!empty($email)) {
                $sql .= ' and email like :email';
                $params[':email'] = "%" . $email . "%";
            }

            if (!empty($sexo)) {
                $sql .= ' and sexo = :sexo';
                $params[':sexo'] = $sexo;
            }

            if (!empty($fecha_nacimiento)) {
                $sql .= ' and fecha_nacimiento >= :fecha';
                $params[':fecha'] = $fecha_nacimiento;
            }
            $stmt = $cnn->prepare($sql);
            $stmt->execute($params);
            $data = array();
            if ($stmt->rowCount() >= 1) {
                while ($resultado = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $usuario = new self($resultado['nombre'], $resultado['apellidos'], $resultado['email'], $resultado['password'], $resultado['telefono'], $resultado['sexo'], $resultado['fecha_nacimiento'], $resultado['id']);
                    $data["data"][] = $usuario;
                }
                $response->setSuccess(true);
                $response->setMessage("Listado obtenido correctamente");
                $response->setData($data);
            } else {
                $response->setMessage("No ha sido encontrado ningún alumno por los datos indicados");
                $response->setData(null);
            }
            $cnn = null;
        } catch (PDOException $e) {
            $response->setMessage("ERROR: Error con la base de datos");
            $response->setData($e->getTrace());
        } finally {
            return $response->toJson2();
        }
    }

    public function deleteUsuario($id)
    {
        $response = new Response(false, "", null);
        try {
            $user = self::getUsuario($id);
            if ($user !== null) {
                //$user = json_decode($decode['data'], true);
                //Deberia usar los metodos setter, pero como no estoy seguro si deberia hacer esto o
                //crear un nuevo User pues demomento lo dejo así, ademas de que en mi caso meter por medio
                //de un setter o no, no cambiaria nada ya que no se esta filtrando nada
                // $user = $stmt->fetch(PDO::FETCH_ASSOC);
                $this->nombre = $user->getNombre();
                $this->apellidos = $user->getApellidos();
                $this->contrasena = $user->getContrasena();
                $this->email = $user->getEmail();
                $this->sexo = $user->getSexo();
                $this->fecha_nacimiento = $user->getFechaNacimiento();
                $this->telefono = $user->getTelefono();

                $conexion = Conexion::getInstance();
                $cnn = $conexion->getConnection();
                $sql = "DELETE FROM alumno WHERE id =?";
                $stmt = $cnn->prepare($sql);
                $stmt->bindParam(1, $id);
                $rows = $stmt->execute();
                if ($rows > 0) {
                    $response->setSuccess(true);
                    $response->setMessage("Usuario con el id " . $id . " ha sido borrado");
                    $response->setData($this->toJson());
                } else {
                    $response->setMessage("Usuario con el id " . $id . " no ha sido borrado");
                    $response->setData(null);
                }
                $cnn = null;
            } else {
                $response->setMessage("Usuario con el id " . $id . " no ha sido encontrado");
                $response->setData(null);
            }
        } catch (PDOException $e) {
            $response->setMessage("ERROR: Error con la base de datos");
            $response->setData($e->getTrace());
        } finally {
            return $response->toJson();
        }
    }

    public static function getUsuario($id)
    {
        //$response = new Response(false, "", null);
        $usuario = null;
        try {
            $conexion = Conexion::getInstance();
            $cnn = $conexion->getConnection();
            $sql = "select id, nombre, apellidos, password, email, sexo, fecha_nacimiento, telefono  from alumno where id = ?";
            $stmt = $cnn->prepare($sql);
            $stmt->bindParam(1, $id);
            $stmt->execute();
            if ($stmt->rowCount() >= 1) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                $usuario = new self($user['nombre'], $user['apellidos'], $user['email'], $user['password'], $user['telefono'], $user['sexo'], $user['fecha_nacimiento'], $user['id']);
            }
            $cnn = null;
        } catch (PDOException $e) {

        } finally {
            return $usuario;
        }
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getApellidos()
    {
        return $this->apellidos;
    }

    public function setApellidos($apellidos)
    {
        $this->apellidos = $apellidos;
    }

    public function getContrasena()
    {
        return $this->contrasena;
    }

    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getSexo()
    {
        return $this->sexo;
    }

    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }

    public function getFechaNacimiento()
    {
        return $this->fecha_nacimiento;
    }

    public function setFechaNacimiento($fecha)
    {
        $this->fecha_nacimiento = $fecha;
    }

    public function getTelefono()
    {
        return $this->telefono;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    public function toJson()
    {
        return json_encode($this);
    }
    public function toJson2()
    {
        return json_encode($this);
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function insertUsuario()
    {
        $response = new Response(false, "", null);
        try {

            $params = array();
            $datos = array();
            $conexion = Conexion::getInstance();
            $cnn = $conexion->getConnection();
            $sql = "INSERT INTO alumno set";
            if (!empty($this->nombre)) {
                $datos[] = " nombre=:nombre";
                $params[':nombre'] = $this->nombre;
            }
            if (!empty($this->apellidos)) {
                $datos[] = " apellidos=:apellidos";
                $params[':apellidos'] = $this->apellidos;
            }
            if (!empty($this->email)) {
                $datos[] = " email=:email";
                $params[':email'] = $this->email;
            }
            if (!empty($this->contrasena)) {
                $datos[] = " password=:password";
                $params[':password'] = $this->contrasena;
            }
            if (!empty($this->sexo)) {
                $datos[] = " sexo=:sexo";
                $params[':sexo'] = $this->sexo;
            }
            if (!empty($this->telefono)) {
                $datos[] = " telefono=:telefono";
                $params[':telefono'] = $this->telefono;
            }
            if (!empty($this->fecha_nacimiento)) {
                $datos[] = " fecha_nacimiento=:fecha";
                $params[':fecha'] = $this->fecha_nacimiento;
            }
            $sql .= implode(",", $datos);
            if ($cnn === null) {
                $response->setMessage("ERROR en la base de datos");
                $response->setData(null);
            } else {
                $stmt = $cnn->prepare($sql);
                $stmt->execute($params);
                if ($stmt->rowCount() === 1) {
                    $this->id = $cnn->lastInsertId();
                    $response->setSuccess(true);
                    $response->setMessage("Usuario añadido correctamente");
                    $response->setData($this->toJson());
                } else {
                    $response->setMessage("El usuario no se ha añadido");
                    $response->setData(null);
                }
            }
        } catch (PDOException $e) {
            $response->setMessage($e->getMessage());
            $response->setData($e->getTrace());
        } finally {
            return $response->toJson();
        }
    }

    public function updateUsuario($id)
    {
        $response = new Response(false, "", null);
        try {
            $params = array();
            $datos = array();
            $conexion = Conexion::getInstance();
            $cnn = $conexion->getConnection();
            $sql = "UPDATE alumno set";
            if (!empty($this->nombre)) {
                $datos[] = " nombre=:nombre";
                $params[':nombre'] = "" . $this->nombre;
            }
            if (!empty($this->apellidos)) {
                $datos[] = " apellidos=:apellidos";
                $params[':apellidos'] = "" . $this->apellidos;
            }
            if (!empty($this->email)) {
                $datos[] = " email=:email";
                $params[':email'] = "" . $this->email;
            }
            if (!empty($this->contrasena)) {
                $datos[] = " password=:password";
                $params[':password'] = "" . $this->contrasena;
            }
            if (!empty($this->sexo)) {
                $datos[] = " sexo=:sexo";
                $params[':sexo'] = "" . $this->sexo;
            }
            if (!empty($this->telefono)) {
                $datos[] = " telefono=:telefono";
                $params[':telefono'] = "" . $this->telefono;
            }
            if (!empty($this->fecha_nacimiento)) {
                $datos[] = " fecha_nacimiento=:fecha";
                $params[':fecha'] = "" . $this->fecha_nacimiento;
            }

            $sql .= implode(",", $datos);

            if (!empty($id)) {
                $sql .= " WHERE id=:id";
                $params[':id'] = $id;
            } else {
                throw new Exception("El id es obligatorio", 1);
            }
            //$sql = "UPDATE alumno set nombre='julio', apellidos='garcia roca' WHERE id=7";
            if ($cnn === null) {
                $response->setMessage("ERROR en la conexion");
                $response->setData(null);
            } else {
                $stmt = $cnn->prepare($sql);

                $stmt->execute($params);
                if ($stmt->rowCount() === 1) {
                    $user = self::getUsuario($id);
                    if ($user !== null) {
                        $response->setSuccess(true);
                        $response->setMessage("Usuario Actualizado");
                        $response->setData($user->toJson());
                    }
                } else {
                    $response->setMessage("El usuario no se ha actualizado, asegurese que el id es correcto y se esta cambiando algun campo");
                    $response->setData(null);
                }
            }
        } catch (PDOException $e) {
            $response->setMessage("ERROR en la base de datos");
            $response->setData($e->getMessage());
        } finally {
            return $response->toJson();
        }
    }
}

