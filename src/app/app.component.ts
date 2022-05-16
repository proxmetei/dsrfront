import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dsrclient';
  constructor(private dataSrvice: UserService){}
  ngOnInit(): void {
      if(this.dataSrvice.isLoggedIn()){
        console.log(11);
        this.dataSrvice.setUserInfo(JSON.parse(localStorage.getItem("user")!).login.toString());
      }
  }
}
