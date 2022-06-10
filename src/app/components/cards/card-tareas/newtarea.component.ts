import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { TareasI } from "src/app/modelos/tareas.interface";
import { userI } from "src/app/modelos/user.interface";
import { ApiService } from "src/app/services/api.service";
import { productosI } from '../../../modelos/productos.interface';
@Component({
  selector: "app-newtarea",
  templateUrl: "./newtarea.component.html",
})
export class newtareaComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private api:ApiService, private router:Router){}

  tarea: TareasI[];
  user: userI[];
  x= localStorage.getItem("workerid");
  newForm= new FormGroup({
    id_usuario : new FormControl(this.x,Validators.required),
    asunto : new FormControl('',Validators.required),
    hora : new FormControl('',Validators.required),
    fecha : new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
  })

onCreate(form:any){
    
  
  this.api.newTarea(form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(data);
    console.log(dataResponse);
    if(dataResponse.success = "true"){
      this.router.navigate(['admin/tareas']);
      
    }
  });
}

  ngOnInit(): void {
    this.api.getUser(this.x).subscribe(date =>{
      this.user= date.data; 
     
   })
  }
}
