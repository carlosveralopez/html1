import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { citasI } from "src/app/modelos/citas.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-vercita",
  templateUrl: "./vercita.component.html",
})
export class vercitaComponent implements OnInit {
  constructor(private api:ApiService, private router:Router) {
  
}
cita: citasI[];

onDelete(){
  let x = localStorage.getItem('citaid');
  this.api.deleteCita(x).subscribe(data =>{
    console.log(data);
    this.router.navigate(['admin/listacita']);
  })
}

ngOnInit(): void {
  let x = localStorage.getItem('citaid')
  this.api.getCita(x).subscribe(data =>{
   this.cita = data.data;
   console.log(this.cita);
   
   
   
 })
   
     console.log(x);
     
   
 }
}
