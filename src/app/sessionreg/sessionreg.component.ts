import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimal } from 'app/animal/animal.interface';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-sessionreg',
  templateUrl: './sessionreg.component.html',
  styleUrls: ['./sessionreg.component.scss']
})
export class SessionregComponent implements OnInit {

  animals: IAnimal[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.animalsInfo$.subscribe((animals)=>{
      this.animals = animals!;
    })
  }
  navigateToNextStep(animal: any){
     this.userService.choosedAnimal=animal;
     this.router.navigate(['sesionreg/second']);
  }

}
