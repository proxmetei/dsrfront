import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.dataService.logout();
    this.router.navigate(['/login']);
  }
  async check(){
   let my = await (await this.dataService.check()).subscribe((res)=>{ console.log(res)})
  }

}
