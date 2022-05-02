import { Injectable } from '@angular/core';
import {IUser} from './user/user.interface';
import {IAnimal} from './animal/animal.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: number=0;
  animals: IAnimal[] =[];
  user: IUser= {};
  addAnimal(animal: IAnimal){
    this.id++;
    animal.id = this.id;
    this.animals.push(animal);
  }
  setFirstStep(login: string, email: string, password: string){
     this.user.email = email;
     this.user.login = login;
     this.user.password = password;
  }
  setSecondStep(name: string, phone: string){
    this.user.phone = phone;
    this.user.name = name;
 }
 register(){

 }
 login(login: string, password:string){
   
}
  constructor() { }
}
