import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { userI } from "src/app/modelos/user.interface";
import { ApiService } from "src/app/services/api.service";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor(private api:ApiService, private router:Router) {}

  registerForm= new FormGroup({
    email : new FormControl('veracarloslopez@gmail.com',Validators.required),
    password : new FormControl('char',Validators.required),
    nombre : new FormControl('charly',Validators.required),
    apellido : new FormControl('vera',Validators.required),
    id_rol : new FormControl('0',Validators.required),
  })
  onCreate(form:userI){
    

    this.api.newClient(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      console.log(dataResponse);
      if(dataResponse.success = "true"){

        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.removeItem('rol');
        this.router.navigate(['auth/login']);
        
      }
    });
  }

  ngOnInit(): void {}
}
