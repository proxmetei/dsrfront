import { Injectable } from '@angular/core';
import { IUser } from './user/user.interface';
import { IAnimal } from './animal/animal.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { IDocument } from './document/document.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IDoctor } from './doctor/doctor.interface';
import { ErrorHandlerService } from './error-handler.service';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }
  id: number = 0;
  animals: IAnimal[] = [];
  public errorMessage: string = '';
  user: IUser = {};
  token: String = "";
  choosedAnimal: IAnimal | null = null;
  choosedDoctor: IDoctor | null = null;
  choosedTime: string = "";
  userinfo$ = new BehaviorSubject<null | IUser>(null);
  animalsInfo$ = new BehaviorSubject<null | IAnimal[]>(null);
  docsInfo$ = new BehaviorSubject<null | IDoctor[]>(null);
  startUser() {
    this.id = 0;
    this.animalsInfo$.subscribe((animals) => {
      animals?.forEach((animal) => {
        this.id++;
        animal.myId = this.id;
      })
    }, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    })
  }
  async addAnimal(animal: IAnimal) {
    this.id++;
    animal.myId = this.id;
    let reader = new FileReader();
    reader.readAsDataURL(animal.img.files[0]);
    reader.onload = () => {
      animal.document = <IDocument>{};
      animal.document.data = reader.result?.toString()!;
      animal.document.name = animal.img.files[0].name;
      this.animals.push(animal);
      this.animalsInfo$.next(this.animals);
    };

  }
  async sesionReg(date: string) {
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post('http://localhost:5000/api/user/setsession', { animalId: this.choosedAnimal?.id, DocId: this.choosedDoctor?.id, date }, httpOptions).subscribe((res) => {
    })
  }
  async editAnimalFile(animal: IAnimal) {

    let reader = new FileReader();
    reader.readAsDataURL(animal.img.files[0]);
    reader.onload = () => {
      if (!animal.document) {
        animal.document = <IDocument>{};
      }
      animal.document.data = reader.result?.toString()!;
      animal.document.name = animal.img.files[0].name;
      return animal;
    };
  }
  async editAnimal(animal: IAnimal) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/animal/edit', { animal: animal }, { headers: headers }).pipe(map(res => {
      const token = <any>res;
      this.setUserInfo(this.user.login!);
      return jwt_decode(token.token)
    })).subscribe(() => this.setUserInfo(this.user.login!), (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }
  setFirstStep(login: string, email: string, password: string) {
    this.user.email = email;
    this.user.login = login;
    this.user.password = password;
  }
  setSecondStep(name: string, phone: string) {
    this.user.phone = phone;
    this.user.name = name;
  }
  storeUser(user: any, token: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }
  register() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/user/register', { user: this.user, animals: this.animals }, { headers: headers }).pipe(map(res => {
      const token = <any>res;
      return jwt_decode(token.token)
    }));
  }
  editUser() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/user/edit', { user: this.user, animals: this.animals }, { headers: headers }).pipe(map(res => {
      const token = <any>res;
      this.setUserInfo(this.user.login!);
      return jwt_decode(token.token)
    })).subscribe(() => this.setUserInfo(this.user.login!));
  }

  getAnimal(id: number) {
    for (let elem of this.animals) {
      if (id === elem.myId) {
        return elem;
      }
    }
    return null;
  }
  login(login: string, password: string) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/user/login', { login: login, password: password }, { headers: headers }).pipe(map(res => {
      const token = <any>res;
      let user = <any>jwt_decode(token.token);
      this.storeUser(user, token.token);
      this.setUserInfo(user.login);
      return { user: user, token: token.token }
    }));
  }
  logout() {
    this.user = {};
    this.token = "";
    localStorage.clear();
  }
  isLoggedIn() {
    return !helper.isTokenExpired(localStorage.getItem('token')!);
  }
  isAdmin() {
    return JSON.parse(localStorage.getItem("user")!).role == 'ADMIN';
  }
  getUserInfo(login: string) {
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post('http://localhost:5000/api/user/info', { login: login }, httpOptions).pipe(
      map((res) => {
        let result = <any>res;
        return result.user;
      })
    );
  }
  setUserInfo(login: string) {
    let subscription = this.getUserInfo(login).subscribe((res) => {
      this.user = <IUser>res;
      let animals = <IAnimal[]>res.animals
      animals.forEach((elem) => {
        this.id++;
        elem.myId = this.id;
      })
      this.animals = animals;
      this.animalsInfo$.next(animals);
      this.userinfo$.next(<IUser>res)
    }, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    }
    );
  }
  getDocs() {
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get('http://localhost:5000/api/user/docs', httpOptions).subscribe((res) => {
      let result = <any>res;
      this.docsInfo$.next(<IDoctor[]>result.docs);
    }, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }
  async check() {
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get('http://localhost:5000/api/user/auth', httpOptions).subscribe((res)=>{}, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }
}
