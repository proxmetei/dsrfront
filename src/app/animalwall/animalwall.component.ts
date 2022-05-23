import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IAnimal } from '../animal/animal.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-animalwall',
  templateUrl: './animalwall.component.html',
  styleUrls: ['./animalwall.component.scss']
})
export class AnimalwallComponent implements OnInit {
  id: null | number = null;
  edit: boolean = false;
  animal: IAnimal = <IAnimal>{};
  animal$ = new BehaviorSubject<null|IAnimal[]>(null);
  private subscription: Subscription| null = null;
  constructor(private userService: UserService, private formBuilder: FormBuilder,private activateRoute: ActivatedRoute,private router:Router, private adminService: AdminService) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
       
        this.subscription = this.activateRoute.params.subscribe(params=>{this.id=params['id'];
        console.log("id: " + this.id);
        if( this.userService.isAdmin()){
          this.adminService.usersInfo$.subscribe((users)=>{
            users?.forEach((user)=>{
              if(user.animals){
                for(let animal of user.animals){
                  if(animal.id==this.id){
                    this.animal=animal;
                    this.updateInfo();
                  }
                }
              }
            })

          })
        }
        else{
        this.userService.animalsInfo$.subscribe((res)=>{
          if(res){
          for(let elem of res!){
               if(elem.id==this.id){
                 this.animal=elem;
               }
          }
        this.updateInfo();
        }
        })
      }
      }
        );

      }
   });
  }
  profileForm = this.formBuilder.group({
    breed:[''],
    kind:[''],
    name:[''],
    img:['']
  })
  updateInfo(){
    var img = document.getElementById("img");
    console.log(this.animal)
    img?.setAttribute('src', this.animal.document.data);
    this.profileForm.get('name')?.setValue(this.animal.name);
    this.profileForm.get('kind')?.setValue(this.animal.kind);
    this.profileForm.get('breed')?.setValue(this.animal.breed);
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }
  startEdit(){
    this.edit=true;
  }
  stopEdit(){
    this.edit=false;
  } 
 async submit(){
    if(this.profileForm.value.kind){
      this.animal.kind=this.profileForm.value.kind;
    }
    if(this.profileForm.value.breed){
      this.animal.breed=this.profileForm.value.breed;
    }
    if(this.profileForm.value.name){
      this.animal.name=this.profileForm.value.name;
    }
    if(this.profileForm.value.img){
      this.animal.img=this.profileForm.value.img;
    await  this.userService.editAnimalFile(this.animal);
    }
    this.userService.editAnimal(this.animal);
  }

}
