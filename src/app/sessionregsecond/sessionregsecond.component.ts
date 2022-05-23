import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctor } from 'app/doctor/doctor.interface';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-sessionregsecond',
  templateUrl: './sessionregsecond.component.html',
  styleUrls: ['./sessionregsecond.component.scss']
})
export class SessionregsecondComponent implements OnInit {

  docs: IDoctor[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getDocs();
    this.userService.docsInfo$.subscribe((docs)=>{
      this.docs=docs!;
    })
  }
  navigateToNextStep(doctor: IDoctor){
    this.userService.choosedDoctor = doctor;
    this.router.navigate(['sesionreg/third']);
  }
}
