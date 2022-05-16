import { Component, OnChanges, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, } from '@angular/core'
import { FormBuilder } from '@angular/forms';
import { IAnimal } from '../animal/animal.interface';
import { UserService } from '../user.service';
import {ModalanimalComponent} from '../modal/modalanimal/modalanimal.component';
@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LkComponent implements OnInit, OnChanges {

  edit: boolean = false;
  animals: IAnimal[] = [];
  @ViewChild('modalForAnimal', { read: ViewContainerRef }) containerAnimal!: { clear: () => void; createComponent: (arg0: ComponentFactory<ModalanimalComponent>) => any; };
  constructor(private resolver: ComponentFactoryResolver, private dataService: UserService, private formBuilder: FormBuilder) { }
  profileForm = this.formBuilder.group({
    login:[''],
    email:[''],
    phone:[''],
    name:[''],
  })
  ngOnInit(): void {
    this.dataService.animalsInfo$.subscribe((animals)=>{
      this.animals = animals!;
    })
    console.log(this.dataService.userinfo$)
    this.dataService.userinfo$.subscribe((user)=>{
      console.log(user);
      if(user!=null){
        this.profileForm.get('login')?.setValue(user?.login!);
        this.profileForm.get('name')?.setValue(user?.name!);
        this.profileForm.get('phone')?.setValue(user?.phone!);
        this.profileForm.get('email')?.setValue(user?.email!);
      // this.dataService.animals =user.animals!;
      this.animals = user.animals!;
      }
    })
  }
  addAnimal(){
    let bg = document.getElementById("bg");
    bg?.classList.add("bg");
    console.log(1)
    this.containerAnimal.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalanimalComponent);
    const n = this.containerAnimal.createComponent(modalFactoryNote);
    n.instance.edit = false;
    n.instance.submitModal.subscribe(() => {
      this.containerAnimal.clear();
      bg?.classList.remove("bg");
    });
  }
  startEdit(){
    this.edit=true;
  }
  stopEdit(){
    this.edit=false;
  } 
  submit(){
    if(this.profileForm.value.login){
      this.dataService.user.login=this.profileForm.value.login;
    }
    if(this.profileForm.value.email){
      this.dataService.user.email=this.profileForm.value.email;
    }
    if(this.profileForm.value.name){
      this.dataService.user.name=this.profileForm.value.name;
    }
    if(this.profileForm.value.phone){
      this.dataService.user.phone=this.profileForm.value.phone;
    }
    this.dataService.editUser();
  }
ngOnChanges(): void {
  // let loginInp: HTMLInputElement = <HTMLInputElement> document.getElementById("login");
  //   let emailInp: HTMLInputElement =  <HTMLInputElement> document.getElementById("email");
  //   loginInp?.toggleAttribute("readonly");
  //   emailInp?.toggleAttribute("readonly");
  //   console.log(this.dataService.userinfo$)
  //   this.dataService.userinfo$.subscribe((user)=>{
  //     console.log(user);
  //     if(user!=null){
  //     loginInp.value= <any>user?.login!;
  //     emailInp.value= user?.email!;
  //     }
  //   })
  
}
}
