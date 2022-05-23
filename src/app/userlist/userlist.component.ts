import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { IUser } from 'app/user/user.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: IUser[] = [];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.usersInfo$.subscribe((res)=>{
       console.log(res);
       this.users=res!;
    })
  }
  goToUser(user: IUser){
  this.router.navigate(['lk',{id:user.id}]);
  }

}
