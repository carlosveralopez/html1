import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { citasI } from "src/app/modelos/citas.interface";
import { ResponseI } from "src/app/modelos/response.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-card-cita",
  templateUrl: "./card-cita.component.html",
})
export class CardcitaComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private api:ApiService, private router:Router){}

  citas: citasI[];

newForm= new FormGroup({
  fecha : new FormControl('2022-02-02',Validators.required),
  hora : new FormControl('09:09:00',Validators.required),
  id_trabajador : new FormControl('1',Validators.required),
  descripcion : new FormControl('nueva cita',Validators.required),
  id_cliente: new FormControl('1',Validators.required),
})

onCreate(form:any){
    
  
  this.api.newCita(form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(data);
    console.log(dataResponse.success);
    if(dataResponse.success = "true"){
      this.router.navigate(['admin/listacita']);
      
    }
  });
}

  ngOnInit(): void {}
}
