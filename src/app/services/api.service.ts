import { Injectable } from "@angular/core";
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { productosI } from '../modelos/productos.interface';
import { Token } from "@angular/compiler";
import { citasI } from "../modelos/citas.interface";
import { userI } from "../modelos/user.interface";
import { TareasI } from "../modelos/tareas.interface";

@Injectable({
    providedIn: 'root'
})
 
export class ApiService {
    //headers = new HttpHeaders().append("Authorization" , "Bearer Token" + localStorage.getItem("token") );
   
    url:string = "http://localhost:8000/";

    constructor(private http:HttpClient) { 
        
    }

    loginByEmail(form:LoginI):Observable<ResponseI>{
        let direccion = "api/login";
        return this.http.post<ResponseI>("api/login",form);
    }
    logout():Observable<ResponseI>{
        let direccion = "api/login/logout";
        return this.http.post<ResponseI>(direccion,"");
    }
    
    getProductos():Observable<ResponseI>{
        
        let direccion = "api/product";
        return this.http.get<ResponseI>(direccion);
    }
    getProducto(id):Observable<ResponseI>{
        
        let direccion = "api/product/"+id;
        return this.http.get<ResponseI>(direccion);
    }
    updateProducto(id,form:any):Observable<ResponseI>{
        
        let direccion = "api/product/"+id+"/update";
        return this.http.patch<ResponseI>(direccion,form);
    }
    newProducto(form:productosI):Observable<ResponseI>{
        
        let direccion = "api/product/create";
        return this.http.post<ResponseI>(direccion,form);
    }
    getCitas():Observable<ResponseI>{
        
        let direccion = "api/date";
        return this.http.get<ResponseI>(direccion);
    }
    getCita(id):Observable<ResponseI>{
        
        let direccion = "api/date/"+id;
        return this.http.get<ResponseI>(direccion);
    }
    newCita(form:citasI):Observable<ResponseI>{
        
        let direccion = "api/date/create";
        return this.http.post<ResponseI>(direccion,form);
    }
    deleteCita(id){
        
        let direccion = "api/date/"+id+"/delete";
        return this.http.delete(direccion,id);
    }
    deleteProduct(id){
        
        let direccion = "api/product/"+id+"/delete";
        return this.http.delete(direccion,id);
    }
    getUser(id):Observable<ResponseI>{
        
        let direccion = "api/user/"+id;
        return this.http.get<ResponseI>(direccion);
    }
    newClient(form:userI):Observable<ResponseI>{
        
        let direccion = "api/user/create";
        return this.http.post<ResponseI>(direccion,form);
    }
    getUsers():Observable<ResponseI>{
        
        let direccion = "api/user";
        return this.http.get<ResponseI>(direccion);
    }
    deleteUser(id){
        
        let direccion = "api/user/"+id+"/delete";
        return this.http.delete(direccion,id);
    }
    updateUser(id,form:any):Observable<ResponseI>{
        
        let direccion = "api/user/"+id+"/update";
        return this.http.patch<ResponseI>(direccion,form);
    }
    getTareas(id):Observable<ResponseI>{
        
        let direccion = "api/user/"+id+"/tasks";
        return this.http.get<ResponseI>(direccion);
    }
    newTarea(form:TareasI):Observable<ResponseI>{
        
        let direccion = "api/task/create";
        return this.http.post<ResponseI>(direccion,form);
    }
    deleteTarea(id){
        
        let direccion = "api/task/"+id+"/delete";
        return this.http.delete(direccion,id);
    }
}