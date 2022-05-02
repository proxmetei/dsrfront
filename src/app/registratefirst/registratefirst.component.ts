import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-registratefirst',
  templateUrl: './registratefirst.component.html',
  styleUrls: ['./registratefirst.component.scss']
})
export class RegistratefirstComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private router: Router, private dataService: UserService) { }
  profileForm = this.formBuilder.group({
    login:[''],
    email:[''],
    password:[''],
    confirmPassword:['']
  })
goNextStep(){
  console.log(1);
  this.router.navigate(['register/second']);
  console.log(this.profileForm.value.login, this.profileForm.value.email, this.profileForm.value.password)
  this.dataService.setFirstStep(this.profileForm.value.login, this.profileForm.value.email, this.profileForm.value.password);
}

  ngOnInit(): void {
  }

}
