import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistratefirstComponent} from './registratefirst/registratefirst.component';
import {RegistratesecondComponent} from './registratesecond/registratesecond.component';
import {RegistratethirdComponent} from './registratethird/registratethird.component';
import {LoginComponent} from "./login/login.component";
const routes: Routes = [
  {path: "register/first", component :RegistratefirstComponent},
  {path: "register/second", component :RegistratesecondComponent},
  {path: "register/third", component :RegistratethirdComponent},
  {path: "login", component :LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistratefirstComponent, RegistratesecondComponent, RegistratethirdComponent];