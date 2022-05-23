import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { ErrorHandlerService } from 'app/error-handler.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private adminService: AdminService,  private errorHandler: ErrorHandlerService) { }
  profileForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })
  ngOnInit(): void {
  }
  login() {
    this.userService.login(this.profileForm.value.login, this.profileForm.value.password).subscribe((res: any) => {
      this.userService.storeUser(res.user, res.token);
      if (this.userService.isLoggedIn() && JSON.parse(localStorage.getItem("user")!).role == 'USER') {
        this.router.navigate(['/lk']);
        this.userService.setUserInfo(JSON.parse(localStorage.getItem("user")!).login.toString());
      }
      else if (this.userService.isLoggedIn() && this.userService.isAdmin()) {
        this.router.navigate(['/userlist']);
        this.adminService.setUsersInfo();
      }

    },  (error) => {
      this.errorHandler.handleError(error);
    });

  }
}
