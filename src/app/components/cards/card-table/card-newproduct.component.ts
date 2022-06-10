import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ResponseI } from "src/app/modelos/response.interface";
import { ApiService } from "src/app/services/api.service";
import { productosI } from '../../../modelos/productos.interface';
@Component({
  selector: "app-card-newproduct",
  templateUrl: "./card-newproduct.component.html",
})
export class CardnewproductComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private api:ApiService, private router:Router){}

  productos: productosI[];

newForm= new FormGroup({
  precio : new FormControl('2',Validators.required),
  cantidad : new FormControl('100',Validators.required),
  nombre : new FormControl('carlo',Validators.required),
  descripcion : new FormControl('se',Validators.required),
  id_categoria: new FormControl('',Validators.required),
})

onCreate(form:any){
    
  
  this.api.newProducto(form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(data);
    console.log(dataResponse.success);
    if(dataResponse.success = "true"){
      this.router.navigate(['admin/tables']);
      
    }
  });
}

  ngOnInit(): void {
    //this.onCreate(this.newForm.value);
  }
}
