import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { userI } from "src/app/modelos/user.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  constructor(private api:ApiService, private router:Router) {}

  user: userI[];


ngOnInit(): void {
 let x = localStorage.getItem('userID')
 this.api.getUser(x).subscribe(data =>{
  this.user = data.data;
  console.log(this.user);
  })
  
    
    
  
}
}
