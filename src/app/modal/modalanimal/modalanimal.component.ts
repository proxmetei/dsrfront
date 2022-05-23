import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-modalanimal',
  templateUrl: './modalanimal.component.html',
  styleUrls: ['./modalanimal.component.scss']
})
export class ModalanimalComponent implements OnInit {
  @Output() submitModal = new EventEmitter<void>();
  constructor( private formBuilder: FormBuilder,  private dataService: UserService) { }
  profileForm = this.formBuilder.group({
    kind:[''],
    breed:[''],
    name:[''],
    img:['']
  })
  ngOnInit(): void {
  }
  
  async addAnimal(){
    await this.dataService.addAnimal(this.profileForm.value);
    this.submitModal.emit();
  }
}
