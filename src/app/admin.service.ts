import { Injectable } from '@angular/core';
import { IUser } from './user/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IDoctor } from './doctor/doctor.interface';
import { ErrorHandlerService } from './error-handler.service';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  users: IUser[] = [];
  public errorMessage: string = '';
  usersInfo$ = new BehaviorSubject<null | IUser[]>(null);
  doctorsInfo$ = new BehaviorSubject<null | IDoctor[]>(null);
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }
  getUsersInfo() {
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get('http://localhost:5000/api/admin/users', httpOptions).pipe(
      map((res) => {
        let result = <any>res;
        return result.users;
      })
    );
  }
  setUsersInfo() {
    this.getUsersInfo().subscribe((res) => {
      this.usersInfo$.next(<IUser[]>res);
    }, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    })
  }
  addDoctor(fio: string, phone: string, experience: string, achivments: string, types: string) {
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post('http://localhost:5000/api/admin/adddoctor', { fio, phone, experience, achivments, types }, httpOptions).subscribe((res) => {
    }, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    })
  }
}
