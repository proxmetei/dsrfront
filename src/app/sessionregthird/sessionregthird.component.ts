import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-sessionregthird',
  templateUrl: './sessionregthird.component.html',
  styleUrls: ['./sessionregthird.component.scss']
})
export class SessionregthirdComponent {

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  profileForm = this.formBuilder.group({
    date: ['']
  })
  sessionReg() {
    this.userService.sesionReg(this.profileForm.value.date.toString());
  }

}
