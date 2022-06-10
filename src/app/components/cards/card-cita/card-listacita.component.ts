import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { citasI } from "src/app/modelos/citas.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-card-listacita",
  templateUrl: "./card-listacita.component.html",
})
export class CardlistacitaComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  public citaid;
  citas: citasI[];
 
   vermas(citaid){
     
      localStorage.setItem("citaid", citaid);
      
      //console.log(this.productos);
    
    
    
   }
   constructor(private api:ApiService, private router:Router) {
     
   }
 
   ngOnInit(): void {
     this.api.getCitas().subscribe(data =>{
        this.citas = data.data;
       console.log(data);
     })
   }
  }
