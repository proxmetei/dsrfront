import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, } from '@angular/core'
import { FormBuilder } from '@angular/forms';
import { IAnimal } from '../animal/animal.interface';
import { UserService } from '../user.service';
import { ModalanimalComponent } from '../modal/modalanimal/modalanimal.component';
import { IUser } from 'app/user/user.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LkComponent implements OnInit {
  @Input() user?: IUser;
  edit: boolean = false;
  animals: IAnimal[] = [];
  private subscription: Subscription | null = null;
  @ViewChild('modalForAnimal', { read: ViewContainerRef }) containerAnimal!: { clear: () => void; createComponent: (arg0: ComponentFactory<ModalanimalComponent>) => any; };
  constructor(private resolver: ComponentFactoryResolver, private userService: UserService, private formBuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private adminService: AdminService) {
    if (this.userService.isAdmin()) {

      router.events.subscribe((route) => {
        if (route instanceof NavigationEnd) {

          this.subscription = this.activateRoute.params.subscribe(params => {
            let id = params['id'];
            this.adminService.usersInfo$.subscribe((users) => {
              users?.forEach((user) => {
                if (user.id == id) {
                  this.userService.userinfo$.next(user);
                  this.userService.animalsInfo$.next(user.animals!);
                  this.userService.startUser();
                }
              })
            })

          })
        }
      });
    }
  }
  profileForm = this.formBuilder.group({
    login: [''],
    email: [''],
    phone: [''],
    name: [''],
  })
  ngOnInit(): void {
    this.userService.animalsInfo$.subscribe((animals) => {
      this.animals = animals!;
    })
    this.userService.userinfo$.subscribe((user) => {
      if (user != null) {
        this.profileForm.get('login')?.setValue(user?.login!);
        this.profileForm.get('name')?.setValue(user?.name!);
        this.profileForm.get('phone')?.setValue(user?.phone!);
        this.profileForm.get('email')?.setValue(user?.email!);
        this.animals = user.animals!;
      }
    })
  }
  navigateToAnimal(animal: IAnimal) {
    if (!this.edit) {
      this.router.navigate(['animalwall', { id: animal.id }]);
    }
  }
  addAnimal() {
    let bg = document.getElementById("bg");
    bg?.classList.add("bg");
    this.containerAnimal.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalanimalComponent);
    const n = this.containerAnimal.createComponent(modalFactoryNote);
    n.instance.edit = false;
    n.instance.submitModal.subscribe(() => {
      this.containerAnimal.clear();
      bg?.classList.remove("bg");
    });
  }
  startEdit() {
    this.edit = true;
  }
  stopEdit() {
    this.edit = false;
  }
  submit() {
    if (this.profileForm.value.login) {
      this.userService.user.login = this.profileForm.value.login;
    }
    if (this.profileForm.value.email) {
      this.userService.user.email = this.profileForm.value.email;
    }
    if (this.profileForm.value.name) {
      this.userService.user.name = this.profileForm.value.name;
    }
    if (this.profileForm.value.phone) {
      this.userService.user.phone = this.profileForm.value.phone;
    }
    this.userService.editUser();
  }

}
