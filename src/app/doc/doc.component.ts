import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { IDoctor } from 'app/doctor/doctor.interface';
import { UserService } from 'app/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent {
  private subscription: Subscription | null = null;
  doc: IDoctor | null = null;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private adminService: AdminService) {

    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {

        this.subscription = this.activateRoute.params.subscribe(params => {
          let id = params['id'];
          this.userService.docsInfo$.subscribe((docs) => {
            docs?.forEach((doc) => {
              if (doc.id == id) {
                this.doc = doc;
                this.profileForm.get('fio')?.setValue(this.doc.fio);
                this.profileForm.get('experience')?.setValue(this.doc.experience);
                this.profileForm.get('phone')?.setValue(this.doc.phone);
                this.profileForm.get('achivments')?.setValue(this.doc.achivments);
                this.profileForm.get('types')?.setValue(this.doc.types);
              }
            })
          })

        })
      }
    });

  }
  profileForm = this.formBuilder.group({
    fio: [''],
    phone: [''],
    experience: [''],
    achivments: [''],
    types: ['']
  })

}
