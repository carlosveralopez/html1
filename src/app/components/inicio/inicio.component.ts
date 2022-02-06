import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //Asignamos los valores por defecto del formulario
  nombre = "Carlos";
  peso = 60;
  altura = 170;
  sexo = '';
  // Cargamos el historial de IMCs en la variable history para mostrarlo en el HTML mediante {{history}}
  history= localStorage.getItem('total');
  
  
   
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //Al seleccionar las opciones Masculino o Femenino en el Formulario se llaman a estas funciones que asignan nuestra eleccion a la variable sexo
  masculino(){
    this.sexo = 'M';
  }
  
  femenino(){
    this.sexo = 'F';
  }
 
  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100,2);
    this.router.navigate(['/resultado', BMI.toFixed(2)]);
    //almacenamos en el localStorage el nombre, añadiendolo al item total que contiene el historial de IMCs 
    //En caso de que entremos a la web por primera vez no habran items almacenados en el localStorage, por tanto solo añadiremos el nombre ya que aun no hay registros en el historial
     
    var total= localStorage.getItem('total');
    if(total!=null){
      localStorage.setItem('total',total+this.nombre);
    }else{
      localStorage.setItem('total',this.nombre);
    }
    
  }
}
