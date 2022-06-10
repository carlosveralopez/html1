import { Component, OnInit, Input, Output } from "@angular/core";
import { Data, Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { ApiService } from "src/app/services/api.service";
import { productosI } from '../../../modelos/productos.interface';

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
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
 productos: productosI[];

  vermas(id){
    
     localStorage.setItem("id", id);
     
     //console.log(this.productos);
   
   
   
  }
  constructor(private api:ApiService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.api.getProductos().subscribe(data =>{
       this.productos = data.data;
      //console.log(this.productos);
    })
  }

}
