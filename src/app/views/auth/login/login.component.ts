import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import {ApiService} from '../../../services/api.service';
import {LoginI} from '../../../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../../../modelos/response.interface';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email : new FormControl('carlosveralopez2012@gmail.com',Validators.required),
    password : new FormControl('password',Validators.required),
    nombre : new FormControl('',Validators.required),
  })


  constructor(private api:ApiService, private router:Router) {}

  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }


  checkLocalStorage(){
    /*if(localStorage.getItem('token')){
      this.router.navigate(['admin/dashboard']);
    }*/
  }


  onLogin(form:LoginI){
    

    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      console.log(dataResponse.success);
      if(dataResponse.success = "true"){

        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.removeItem('rol');

        localStorage.setItem("token",dataResponse.data[1]);
        localStorage.setItem("userID",dataResponse.data[0].id);
        localStorage.setItem("rol",dataResponse.data[0].id_rol);
        localStorage.setItem("nombreUser",dataResponse.data[0].nombre);
        if(localStorage.getItem('rol')=='2'){
        this.router.navigate(['admin/dashboard']);
      }else{
        if(localStorage.getItem('rol')=='1'){
          this.router.navigate(['admin/mistareas']);
        }
      }
      }else{
        
        this.errorStatus=true;
        this.errorMsj = "Email o Contraseña incorrectos";
      }
    });
  }
  /*onLogin(form){
    console.log(form);
  }*/
}


