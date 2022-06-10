import { Component, OnInit, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Data, Router } from "@angular/router";
import { CardTableComponent } from "src/app/components/cards/card-table/card-table.component";
import { ResponseI } from "src/app/modelos/response.interface";
import { ApiService } from "src/app/services/api.service";
import { userI } from '../../../modelos/user.interface';

@Component({
  selector: "app-mas-user",
  templateUrl: "./mas-user.component.html",
})
export class masuserComponent implements OnInit {

  constructor(private api:ApiService, private router:Router)  {
    window.addEventListener('DOMContentLoaded', () => {
      const overlay = document.querySelector('#overlay')
      const delBtn = document.querySelector('#delete-btn')
      const closeBtn = document.querySelector('#close-modal')
  
      const toggleModal = () => {
          overlay.classList.toggle('hidden')
          overlay.classList.toggle('flex')
      }
  
      delBtn.addEventListener('click', toggleModal)
      
      closeBtn.addEventListener('click', toggleModal)
})}


onDelete(){
  let x = localStorage.getItem('workerid');
  let y = localStorage.getItem('userID');
  if(x != y){
    this.api.deleteUser(x).subscribe(data =>{
      console.log(data);
      this.router.navigate(['admin/user']);
    })
  }
  
}

user: userI[];

updateForm= new FormGroup({
  nombre : new FormControl('',Validators.required),
  apellido : new FormControl('',Validators.required),
  email : new FormControl('',Validators.required),
  password : new FormControl('',Validators.required),
  id_rol: new FormControl('',Validators.required),
})

onUpdate(form:any){
  
  let x = localStorage.getItem('workerid');
  this.api.updateUser(x,form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(dataResponse);
    if(dataResponse.success = "true"){
      this.ngOnInit();
    }
  });
}

ngOnInit(): void {
 let x = localStorage.getItem('workerid')
 this.api.getUser(x).subscribe(data =>{
  this.user = data.data;
  console.log(this.user);
  })
  
    
    
  
}

 
}
