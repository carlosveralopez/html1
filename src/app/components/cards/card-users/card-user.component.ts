import { Component, OnInit, Input, Output } from "@angular/core";
import { Data, Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { userI } from "src/app/modelos/user.interface";
import { ApiService } from "src/app/services/api.service";
import { productosI } from '../../../modelos/productos.interface';

@Component({
  selector: "app-card-user",
  templateUrl: "./card-user.component.html",
})
export class CardUserComponent implements OnInit {
  @Input()
  @Output() 
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  public id;
 users: userI[];

  vermas(id){
    
     localStorage.setItem("workerid", id);
     
  }
  tareas(id){
    localStorage.setItem("workerid", id);
  }
  constructor(private api:ApiService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.api.getUsers().subscribe(data =>{
       this.users= data.data;
      console.log(this.users);
    })
  }

}
