import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { IAnimal } from 'app/animal/animal.interface';
import { IUser } from 'app/user/user.interface';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.scss']
})
export class AnimallistComponent implements OnInit {
   animals: IAnimal[] = [];
  constructor(private adminService: AdminService, private router: Router) { }
  navigateToAnimal(animal: IAnimal){
    this.router.navigate(['animalwall',{id:animal.id}]);
}
  ngOnInit(): void {
    this.adminService.usersInfo$.subscribe((users)=>{
      users?.forEach((user)=>{
        console.log(user);
            user.animals?.forEach((animal)=>{
                this.animals.push(animal);
            })
      })
    })
  }

}
