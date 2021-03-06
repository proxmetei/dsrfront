import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistratefirstComponent } from './registratefirst/registratefirst.component';
import { RegistratesecondComponent } from './registratesecond/registratesecond.component';
import { RegistratethirdComponent } from './registratethird/registratethird.component';
import { LoginComponent } from "./login/login.component";
import { LkComponent } from './lk/lk.component';
import { IsLoggedInGuard } from './guards/isLogged.guard';
import { AnimalwallComponent } from './animalwall/animalwall.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AnimallistComponent } from './animallist/animallist.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';
import { DoclistComponent } from './doclist/doclist.component';
import { DocComponent } from './doc/doc.component';
import { SessionregComponent } from './sessionreg/sessionreg.component';
import { SessionregsecondComponent } from './sessionregsecond/sessionregsecond.component';
import { SessionregthirdComponent } from './sessionregthird/sessionregthird.component';
import { HomeComponent } from './home/home.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
const routes: Routes = [
  { path: "register/first", component: RegistratefirstComponent },
  { path: "register/second", component: RegistratesecondComponent },
  { path: "register/third", component: RegistratethirdComponent },
  { path: "login", component: LoginComponent },
  { path: "lk", component: LkComponent, canActivate: [IsLoggedInGuard] },
  { path: "animalwall", component: AnimalwallComponent, canActivate: [IsLoggedInGuard] },
  { path: "userlist", component: UserlistComponent, canActivate: [IsLoggedInGuard] },
  { path: "animallist", component: AnimallistComponent, canActivate: [IsLoggedInGuard] },
  { path: "doctoradd", component: DoctoraddComponent, canActivate: [IsLoggedInGuard] },
  { path: "doctorlist", component: DoclistComponent, canActivate: [IsLoggedInGuard] },
  { path: "doc", component: DocComponent, canActivate: [IsLoggedInGuard] },
  { path: "sessionreg", component: SessionregComponent, canActivate: [IsLoggedInGuard] },
  { path: "sesionreg/second", component: SessionregsecondComponent, canActivate: [IsLoggedInGuard] },
  { path: "sesionreg/third", component: SessionregthirdComponent, canActivate: [IsLoggedInGuard] },
  { path: "500", component: InternalServerComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistratefirstComponent, RegistratesecondComponent, RegistratethirdComponent];