import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,  private dataService: UserService) { }
  profileForm = this.formBuilder.group({
    login:[''],
    password:[''],
  })
  ngOnInit(): void {
  }
  login(){
    this.dataService.login(this.profileForm.value.login, this.profileForm.value.password).subscribe((res)=>{console.log(res)});
  }
}
