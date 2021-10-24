<?php


Class Conexion{
	
	protected $conexion_db;
	
	public function __construct(){

		define ('DB_HOST', 'localhost');
        define ('DB_USER', 'root');
        define ('DB_PASS', '');
        define ('DB_NAME', 'colegio');
        define ('DB_CHARSET', 'utf8');

		try{
			//se crea el objeto de tipo conexión
			$this->conexion_db=new PDO('mysql:host=localhost; dbname=colegio','root','');
			$this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conexion_db->exec("SET CHARACTER SET utf8");
			return $this->conexion_db;
			
			
			}catch(Exception $e){
				
				echo "la linea de error es: " . $e->getline();
				
				}
			
		}

}
?>