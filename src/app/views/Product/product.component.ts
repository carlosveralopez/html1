import { Component, OnInit, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Data, Router } from "@angular/router";
import { CardTableComponent } from "src/app/components/cards/card-table/card-table.component";
import { ResponseI } from "src/app/modelos/response.interface";
import { ApiService } from "src/app/services/api.service";
import { productosI } from '../../modelos/productos.interface';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements OnInit {

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
  let x = localStorage.getItem('id');
  this.api.deleteProduct(x).subscribe(data =>{
    console.log(data);
    this.router.navigate(['admin/tables']);
  })
}

productos: productosI[];

updateForm= new FormGroup({
  precio : new FormControl('',Validators.required),
  cantidad : new FormControl('',Validators.required),
  nombre : new FormControl('',Validators.required),
  descripcion : new FormControl('',Validators.required),
  id_categoria: new FormControl('',Validators.required),
})

onUpdate(form:any){
    
  let x = localStorage.getItem('id');
  this.api.updateProducto(x,form).subscribe(data =>{
    let dataResponse:ResponseI = data;
    console.log(dataResponse.success);
    if(dataResponse.success = "true"){
      this.router.navigate(['admin/product']);
      this.ngOnInit();
    }
  });
}

ngOnInit(): void {
 let x = localStorage.getItem('id')
 this.api.getProducto(x).subscribe(data =>{
  this.productos = data.data;
  console.log(this.productos);
  
  
  
})
  
    console.log(x);
    
  
}

 
}
