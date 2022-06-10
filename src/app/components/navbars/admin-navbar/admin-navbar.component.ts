import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  public User= localStorage.getItem("nombreUser");
  
  constructor() {}

  ngOnInit(): void {}
}
