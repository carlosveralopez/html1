import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
   history:string;
   bmi:number;
   resultado:string;
   interpretacion:string;

  constructor(private route:ActivatedRoute) { 
    //Asignamos valores por defecto a la página HTML
    this.resultado = '';
    this.interpretacion = '';
    this.history = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    
    
  }
//llamamos al método al iniciar
  ngOnInit(): void {
    this.getResultado();
   
}

  
  //dependiendo del resultado del calculo de IMC obtendremos un comentario u otro
  getResultado(): void{
    if (this.bmi <= 18) {
      this.resultado = 'Bajo de peso';
      this.interpretacion = 'Tienes un peso corporal inferior al normal.';
      console.log(this.interpretacion)
    } else if (this.bmi >= 18.01 && this.bmi <= 24.99) {
      this.resultado = 'Peso normal';
      this.interpretacion = 'Tienes un peso corporal normal.';
    } else if (this.bmi >= 25 && this.bmi <= 29.99) {
      this.resultado = 'Sobre peso';
      this.interpretacion = 'Tienes un peso corporal levemente superior al normal.';
    } else if (this.bmi >= 30 && this.bmi <= 34.99) {
      this.resultado = 'Obesidad';
      this.interpretacion = 'Tienes un peso corporal superior al normal.';
    } else if (this.bmi >= 35) {
      this.resultado = 'Obesidad extrema';
      this.interpretacion = 'Tienes un peso corporal extremadamente superior al normal.';
    }
    var total= localStorage.getItem('total');
    //Añadimos el resultado del calculo de IMC en el item total del localStorage
    //el item contiene el historial de IMCs
    localStorage.setItem('total',total+" "+this.interpretacion+";");
  }
}
