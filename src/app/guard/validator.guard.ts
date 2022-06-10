import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseI } from '../modelos/response.interface';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorGuard implements CanActivate {


  


  constructor(private api: ApiService, private router: Router) {}
  
  peticion(){
    const token=localStorage.getItem("token");
    const id=localStorage.getItem("userID");

    this.api.getUser(id).subscribe(data =>{
      let dataResponse:ResponseI = data;
      
     
     localStorage.setItem("rol",dataResponse.data.id_rol);
    });
    
  }

  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.peticion();
      let x = localStorage.getItem("rol");;
      console.log(x);
      
      if(x>"0" && localStorage.getItem('token')){return true;
      }else{
        this.router.navigate(['auth/login']);
        return false;
       
      }
    
  }
  
}


