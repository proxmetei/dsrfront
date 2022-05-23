import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dsrclient';
  constructor(private userService: UserService, private adminService: AdminService){}
  ngOnInit(): void {
      if(this.userService.isLoggedIn()&&JSON.parse(localStorage.getItem("user")!).role=='USER'){
        this.userService.setUserInfo(JSON.parse(localStorage.getItem("user")!).login.toString());
      }
      else if(this.userService.isLoggedIn()&&this.userService.isAdmin())
      {
        this.adminService.setUsersInfo();
      }
  }
}
