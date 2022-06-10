import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenSessionInterceptor } from './jwt-interceptor.interceptor';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

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

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views


import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts
import { CardUserComponent } from "./components/cards/card-users/card-user.component";
import { CardTareasComponent } from "./components/cards/card-tareas/card-tareas.component";
import { CardmisTareasComponent } from "./components/cards/card-tareas/card-mistareas.component";
import { masuserComponent } from "./components/cards/card-users/mas-user.component";
import { newuserComponent } from "./components/cards/card-users/newuser.component";
import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";

import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { CardnewproductComponent } from "./components/cards/card-table/card-newproduct.component";
import { CardfacturaComponent } from "./components/cards/card-factura/card-factura.component";
import { CardcitaComponent } from "./components/cards/card-cita/card-cita.component";
import { CardlistacitaComponent } from "./components/cards/card-cita/card-listacita.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { ProductComponent } from "./views/product/product.component";
import { newproductComponent } from "./views/product/newproduct.component";
import { vercitaComponent } from "./views/admin/cita/vercita.component";
import { newtareaComponent } from "./components/cards/card-tareas/newtarea.component";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    newuserComponent,
    newtareaComponent,
    masuserComponent,
    CardUserComponent,
    CardTareasComponent,
    CardmisTareasComponent,
    PagesDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    CardProfileComponent,
    CardStatsComponent,
    CardTableComponent,
    CardnewproductComponent,
    CardfacturaComponent,
    CardcitaComponent,
    CardlistacitaComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    TablesComponent,
    facturaComponent,
    citaComponent,
    listacitaComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProductComponent,
    newproductComponent,
    vercitaComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [{
    useClass:TokenSessionInterceptor,
    provide:HTTP_INTERCEPTORS,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
