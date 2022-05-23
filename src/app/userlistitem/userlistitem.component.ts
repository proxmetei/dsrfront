import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'app/user/user.interface';

@Component({
  selector: 'app-userlistitem',
  templateUrl: './userlistitem.component.html',
  styleUrls: ['./userlistitem.component.scss']
})
export class UserlistitemComponent implements OnInit {
  @Input() user!: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
