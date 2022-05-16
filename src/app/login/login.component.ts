import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {IUser} from '../user/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,  private dataService: UserService, private router: Router) { }
  profileForm = this.formBuilder.group({
    login:[''],
    password:[''],
  })
  ngOnInit(): void {
  }
  login(){
    this.dataService.login(this.profileForm.value.login, this.profileForm.value.password).subscribe((res: any)=>{ 
      this.dataService.storeUser(res.user, res.token);
      this.router.navigate(['/lk']);
    });

  }
}
