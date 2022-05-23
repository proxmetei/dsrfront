import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registratesecond',
  templateUrl: './registratesecond.component.html',
  styleUrls: ['./registratesecond.component.scss']
})
export class RegistratesecondComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: UserService) { }
  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  })
  ngOnInit(): void {
  }
  goNextStep() {
    this.router.navigate(['register/third']);
    this.dataService.setSecondStep(this.profileForm.value.name, this.profileForm.value.phone);
  }
}
