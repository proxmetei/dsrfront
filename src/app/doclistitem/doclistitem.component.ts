import { Component, Input, OnInit } from '@angular/core';
import { IDoctor } from 'app/doctor/doctor.interface';

@Component({
  selector: 'app-doclistitem',
  templateUrl: './doclistitem.component.html',
  styleUrls: ['./doclistitem.component.scss']
})
export class DoclistitemComponent implements OnInit {
  @Input() doc!: IDoctor;
  constructor() { }

  ngOnInit(): void {
  }

}
