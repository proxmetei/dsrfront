import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registratefirst',
  templateUrl: './registratefirst.component.html',
  styleUrls: ['./registratefirst.component.scss']
})
export class RegistratefirstComponent {
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  validate(formgroup: FormGroup) {
    const password = formgroup.controls['password'];
    const confirmpassword = formgroup.controls['confirmpassword'];
    if (password.value == confirmpassword.value) {
      return true;
    }
    return confirmpassword.setErrors({
      notEqual: true
    })
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: UserService) { }
  profileForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: this.MustMatch('password', 'confirmPassword')
  })
  goNextStep() {
    this.router.navigate(['register/second']);
    this.dataService.setFirstStep(this.profileForm.value.login, this.profileForm.value.email, this.profileForm.value.password);
  }



}
