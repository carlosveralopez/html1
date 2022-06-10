import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  constructor(private api:ApiService, private router:Router)  {
    window.addEventListener('DOMContentLoaded', () => {
      const panel = document.querySelector('#panel')
      
  
      const toggleModal = () => {
        let x= localStorage.getItem("rol");
        if(x=='2'){
          this.router.navigate(['admin/user']);
        }else{
          if(x=='1'){
            this.router.navigate(['admin/mistareas']);
          }
        }
        
      }
  
      panel.addEventListener('click', toggleModal)
      
      
})}

  ngOnInit(): void {}
}
