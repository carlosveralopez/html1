import { Component, OnInit, Input, Output } from "@angular/core";
import { Data, Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { TareasI } from "src/app/modelos/tareas.interface";
import { userI } from "src/app/modelos/user.interface";
import { ApiService } from "src/app/services/api.service";


@Component({
  selector: "app-card-tareas",
  templateUrl: "./card-tareas.component.html",
})
export class CardTareasComponent implements OnInit {
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
 
 data;
  user: userI[];
  constructor(private api:ApiService, private router:Router) {
    
  }

  ngOnInit(): void {
    let x= localStorage.getItem("workerid")
    this.api.getUser(x).subscribe(date =>{
      this.user= date.data; 
     
   })

    this.api.getTareas(x).subscribe(data =>{
       this.data= data; 
      
    })
  }

}
