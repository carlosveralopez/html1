import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { userI } from "src/app/modelos/user.interface";
import { ApiService } from "src/app/services/api.service";
import { productosI } from '../../../modelos/productos.interface';
@Component({
  selector: "app-newuser",
  templateUrl: "./newuser.component.html",
})
export class newuserComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private api:ApiService, private router:Router){}

  users: userI[];

  newForm= new FormGroup({
    nombre : new FormControl('',Validators.required),
    apellido : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    id_rol: new FormControl('',Validators.required),
  })

onCreate(form:any){
    
  
  this.api.newClient(form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(data);
    console.log(dataResponse);
    if(dataResponse.success = "true"){
      this.router.navigate(['admin/user']);
      
    }
  });
}

  ngOnInit(): void {
    //this.onCreate(this.newForm.value);
  }
}
