import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { ResponseI } from "src/app/modelos/response.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements AfterViewInit {
  constructor(private api:ApiService, private router:Router){}
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  cerrarSesion(){
    this.api.logout().subscribe(data =>{
      let dataResponse:ResponseI = data;
      console.log(data);
      console.log(dataResponse);
      if(dataResponse.success = "true"){
        localStorage.clear();
        this.router.navigate(['auth/login']);
        
      }
    });
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
