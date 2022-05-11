import { Injectable } from '@angular/core';
import {IUser} from './user/user.interface';
import {IAnimal} from './animal/animal.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map,observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient) {}
  id: number=0;
  animals: IAnimal[] =[];
  user: IUser= {};
  async addAnimal(animal: IAnimal){
    this.id++;
    animal.id = this.id;
    let reader = new FileReader();
    reader.readAsDataURL(animal.img.files[0]); 
    reader.addEventListener("load", function () {
     animal.url=reader.result?.toString()!;
     console.log(animal.url);
    }, false);

    // animal.file = animal.img.files[0];
    // animal.fd = new FormData();
    // animal.fd.append("file", animal.file, animal.file.name); 
    animal.img_name = animal.img.files[0].name;
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
let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
return this.http.post('http://localhost:5000/api/user/register', {user : this.user, animals: this.animals}, {headers: headers});
 }
 login(login: string, password:string){
  let headers = new HttpHeaders();
  console.log(login);
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:5000/api/user/login', {login : login, password: password}, {headers: headers});
}
}
