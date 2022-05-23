import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin.service';

@Component({
  selector: 'app-doctoradd',
  templateUrl: './doctoradd.component.html',
  styleUrls: ['./doctoradd.component.scss']
})
export class DoctoraddComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private router: Router, private dataService: AdminService) { }
  profileForm = this.formBuilder.group({
    fio:['', [Validators.required]],
    phone:['', [Validators.required]],
    experience:['', [Validators.required]],
    achivments:['', [Validators.required]],
    types:['', [Validators.required]]
  })
goNextStep(){
  console.log(1);
  // this.router.navigate(['doctorslsit']);
  // console.log(this.profileForm.value.login, this.profileForm.value.email, this.profileForm.value.password)
  this.dataService.addDoctor(this.profileForm.value.fio, this.profileForm.value.phone, this.profileForm.value.experience, this.profileForm.value.achivments, this.profileForm.value.types);
}
  ngOnInit(): void {
  }

}
