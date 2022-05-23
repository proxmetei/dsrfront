import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin.service';

@Component({
  selector: 'app-doctoradd',
  templateUrl: './doctoradd.component.html',
  styleUrls: ['./doctoradd.component.scss']
})
export class DoctoraddComponent   {

  constructor( private formBuilder: FormBuilder, private router: Router, private dataService: AdminService) { }
  profileForm = this.formBuilder.group({
    fio:['', [Validators.required]],
    phone:['', [Validators.required]],
    experience:['', [Validators.required]],
    achivments:['', [Validators.required]],
    types:['', [Validators.required]]
  })
goNextStep(){
  this.dataService.addDoctor(this.profileForm.value.fio, this.profileForm.value.phone, this.profileForm.value.experience, this.profileForm.value.achivments, this.profileForm.value.types);
}


}
