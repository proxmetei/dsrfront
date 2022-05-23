import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctor } from 'app/doctor/doctor.interface';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.scss']
})
export class DoclistComponent implements OnInit {
  docs: IDoctor[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getDocs();
    this.userService.docsInfo$.subscribe((docs)=>{
      this.docs=docs!;
    })
  }
  goToDoc(user: IDoctor){
    console.log(user.id);
    this.router.navigate(['doc',{id:user.id}]);
    }

}
