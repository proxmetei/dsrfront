import { Injectable } from '@angular/core';
import {IUser} from './user/user.interface';
import {IAnimal} from './animal/animal.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map,observable,pipe,from, BehaviorSubject} from 'rxjs';
import jwt_decode from "jwt-decode";
import { Token } from '@angular/compiler';
import {IDocument} from './document/document.interface';
import {JwtHelperService} from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient) {}
  id: number=0;
  animals: IAnimal[] =[];
  user: IUser= {};
  token: String = "";
  userinfo$ = new BehaviorSubject<null|IUser>(null);
  animalsInfo$ = new BehaviorSubject<null|IAnimal[]>(null);
  async addAnimal(animal: IAnimal){
    console.log(1);
    this.id++;
    animal.myId = this.id;
    let reader = new FileReader();
    reader.readAsDataURL(animal.img.files[0]); 
    reader.onload =   () =>{
      animal.document = <IDocument>{};
     animal.document.data=reader.result?.toString()!;
     console.log(animal.document);
     animal.document.name = animal.img.files[0].name;
     this.animals.push(animal);
     this.animalsInfo$.next(this.animals);
     console.log(this.animals);
    };
    

    // animal.file = animal.img.files[0];
    // animal.fd = new FormData();
    // animal.fd.append("file", animal.file, animal.file.name); 

  }
  async editAnimalFile(animal: IAnimal){
    console.log(1);
    
    let reader = new FileReader();
    reader.readAsDataURL(animal.img.files[0]); 
    reader.onload =   () =>{
      if(!animal.document){
      animal.document = <IDocument>{};
      }
     animal.document.data=reader.result?.toString()!;
     console.log(animal.document);
     animal.document.name = animal.img.files[0].name;
     return animal;
    };
  }
  async editAnimal(animal: IAnimal){
    console.log(animal);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/animal/edit', {animal: animal}, {headers: headers}).pipe(map(res=>{
      const token = <any> res;
      this.setUserInfo(this.user.login!);
     return  jwt_decode(token.token)
    })).subscribe(()=>this.setUserInfo(this.user.login!));
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
 storeUser(user: any, token:any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
    console.log(localStorage.getItem('user'));
 }
 register(){
let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
return this.http.post('http://localhost:5000/api/user/register', {user : this.user, animals: this.animals}, {headers: headers}).pipe(map(res=>{
  const token = <any> res;
 return  jwt_decode(token.token)
}));
 }
 editUser(){
   console.log("edit");
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:5000/api/user/edit', {user : this.user, animals: this.animals}, {headers: headers}).pipe(map(res=>{
    const token = <any> res;
    this.setUserInfo(this.user.login!);
   return  jwt_decode(token.token)
  })).subscribe(()=>this.setUserInfo(this.user.login!));
   }

   getAnimal(id: number){
     console.log(id);
     console.log(this.animals);
    for(let elem of this.animals){
      if(id===elem.myId){
        console.log(elem);
        return elem;
      }
    }
    return null;
   }
 login(login: string, password:string){
   
  let headers = new HttpHeaders();
  console.log(login);
  headers.append('Content-Type', 'application/json');
  return  this.http.post('http://localhost:5000/api/user/login', {login : login, password: password}, {headers: headers}).pipe(map(res=>{
      const token = <any> res;
      let user = <any>jwt_decode(token.token);
      console.log(user.login);
      this.storeUser(user, token.token);
      this.setUserInfo(user.login);
     return  {user: user, token: token.token}
    }));
}
logout(){
  this.user= {};
  this.token = "";
  localStorage.clear();
}
isLoggedIn(){
  return !helper.isTokenExpired(localStorage.getItem('token')!);
}
getUserInfo(login: string){
  console.log(1);
  let headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+localStorage.getItem("token")
  });

      const httpOptions = {
        headers: headers_object
      };
      console.log(httpOptions.headers);
  return this.http.post('http://localhost:5000/api/user/info',{login: login}, httpOptions).pipe(
    map((res)=>{
      let result = <any> res;
      // console.log(result);
      return result.user;
    })
  );
}
setUserInfo(login:string){
  console.log(1);
  let subscription = this.getUserInfo(login).subscribe((res)=>{ 
    console.log(<IUser>res);
    this.user = <IUser> res;
    let animals = <IAnimal[]> res.animals
    animals.forEach((elem)=>{
       this.id++;
       console.log(this.id);
       elem.myId=this.id;
    })
    this.animals = animals;
    console.log(animals);
    this.animalsInfo$.next(animals);
    this.userinfo$.next(<IUser>res)}
    );
    // subscription.unsubscribe();
}
async check(){
  let headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+localStorage.getItem("token")
  });

      const httpOptions = {
        headers: headers_object
      };
      console.log(httpOptions);
  return  this.http.get('http://localhost:5000/api/user/auth',  httpOptions);
}
}
