import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";

import { TablesComponent } from "./views/admin/tables/tables.component";
import { facturaComponent } from "./views/admin/factura/factura.component";
import { citaComponent } from "./views/admin/cita/cita.component";
import { listacitaComponent } from "./views/admin/cita/listacita.component";
import { vercitaComponent } from "./views/admin/cita/vercita.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views


import { ProfileComponent } from "./views/profile/profile.component";
import { ProductComponent } from "./views/product/product.component";
import { CardUserComponent } from "./components/cards/card-users/card-user.component";
import { CardTareasComponent } from "./components/cards/card-tareas/card-tareas.component";
import { CardmisTareasComponent } from "./components/cards/card-tareas/card-mistareas.component";
import { masuserComponent } from "./components/cards/card-users/mas-user.component";
import { newuserComponent } from "./components/cards/card-users/newuser.component";
import { newtareaComponent } from "./components/cards/card-tareas/newtarea.component";
import { newproductComponent } from "./views/product/newproduct.component";
import { ValidatorGuard } from "./guard/validator.guard";


const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [ValidatorGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "tables", component: TablesComponent },
      { path: "factura", component: facturaComponent },
      { path: "cita", component: citaComponent },
      { path: "listacita", component: listacitaComponent },
      { path: "maps", component: MapsComponent },
      { path: "profile", component: ProfileComponent },
      { path: "product", component: ProductComponent },
      { path: "newproduct", component: newproductComponent },
      { path: "vercita", component: vercitaComponent },
      { path: "masuser", component: masuserComponent },
      { path: "newuser", component: newuserComponent },
      { path: "newtarea", component: newtareaComponent },
      { path: "user", component: CardUserComponent },
      { path: "tareas", component: CardTareasComponent },
      { path: "mistareas", component: CardmisTareasComponent },
      { path: "", redirectTo: "tables", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  
 
  
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
