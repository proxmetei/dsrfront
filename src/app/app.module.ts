import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RegistrateComponent } from './registrate/registrate.component';
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
import {UserService} from './user.service';
import { AnimalcardComponent } from './animalcard/animalcard.component';
import { LoginComponent } from './login/login.component';
// import {} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    RegistratefirstComponent,
    RegistratesecondComponent,
    RegistratethirdComponent,
    ModalanimalComponent,
    AnimalcardComponent,
    LoginComponent
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
    MaterialFileInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
