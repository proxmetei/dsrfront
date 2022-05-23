import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(public dataService: UserService, private router: Router) { }

  logout(){
    this.dataService.logout();
    this.router.navigate(['/login']);
  }
homeNav(){
  this.router.navigate(['/']);
}

}
