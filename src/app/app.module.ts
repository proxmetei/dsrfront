import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import { RegistratefirstComponent } from './registratefirst/registratefirst.component';
import { RegistratesecondComponent } from './registratesecond/registratesecond.component';
import { RegistratethirdComponent } from './registratethird/registratethird.component';
import { ModalanimalComponent } from './modal/modalanimal/modalanimal.component';
import {MatIconModule} from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatToolbarModule} from '@angular/material/toolbar'
import {UserService} from './user.service';
import { AnimalcardComponent } from './animalcard/animalcard.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { LkComponent } from './lk/lk.component';
import {IsLoggedInGuard} from './guards/isLogged.guard';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AnimalwallComponent } from './animalwall/animalwall.component';
import { AdminService } from './admin.service';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlistitemComponent } from './userlistitem/userlistitem.component';
import { AnimallistComponent } from './animallist/animallist.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';
import { DoclistComponent } from './doclist/doclist.component';
import { DoclistitemComponent } from './doclistitem/doclistitem.component';
import { DocComponent } from './doc/doc.component';
import { SessionregComponent } from './sessionreg/sessionreg.component';
import { SessionregsecondComponent } from './sessionregsecond/sessionregsecond.component';
import { SessionregthirdComponent } from './sessionregthird/sessionregthird.component';
import { HomeComponent } from './home/home.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistratefirstComponent,
    RegistratesecondComponent,
    RegistratethirdComponent,
    ModalanimalComponent,
    AnimalcardComponent,
    LoginComponent,
    LkComponent,
    HeaderComponent,
    AnimalwallComponent,
    UserlistComponent,
    UserlistitemComponent,
    AnimallistComponent,
    DoctoraddComponent,
    DoclistComponent,
    DoclistitemComponent,
    DocComponent,
    SessionregComponent,
    SessionregsecondComponent,
    SessionregthirdComponent,
    HomeComponent,
    InternalServerComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule, 
    MatInputModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MaterialFileInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
  ],
  providers: [UserService,IsLoggedInGuard,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
