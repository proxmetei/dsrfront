import { Injectable } from '@angular/core';
import {IUser} from './user/user.interface';
import {IAnimal} from './animal/animal.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map,observable,pipe,from, BehaviorSubject} from 'rxjs';
import jwt_decode from "jwt-decode";
import { Token } from '@angular/compiler';
import {IDocument} from './document/document.interface';
import {JwtHelperService} from '@auth0/angular-jwt';
import { IDoctor } from './doctor/doctor.interface';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AdminService {
users: IUser[] = [];
usersInfo$ = new BehaviorSubject<null|IUser[]>(null);
doctorsInfo$ = new BehaviorSubject<null|IDoctor[]>(null);
  constructor( private http: HttpClient) {}
  getUsersInfo(){
    console.log(1);
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+localStorage.getItem("token")
    });
  
        const httpOptions = {
          headers: headers_object
        };
        console.log(httpOptions.headers);
    return this.http.get('http://localhost:5000/api/admin/users', httpOptions).pipe(
      map((res)=>{
        let result = <any> res;
        console.log(result);
        return result.users;
      })
    );
  }
  setUsersInfo(){
    this.getUsersInfo().subscribe((res)=>{
      this.usersInfo$.next(<IUser[]>res);
    })
  }
addDoctor(fio:string, phone:string, experience:string, achivments:string, types:string){
  let headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+localStorage.getItem("token")
  });

      const httpOptions = {
        headers: headers_object
      };
      console.log(fio);
  return this.http.post('http://localhost:5000/api/admin/adddoctor',{fio, phone, experience, achivments, types}, httpOptions).subscribe((res)=>{
    console.log(res);
  })
}
}
