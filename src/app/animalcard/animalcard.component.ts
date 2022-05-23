import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimal } from './../animal/animal.interface';
@Component({
  selector: 'app-animalcard',
  templateUrl: './animalcard.component.html',
  styleUrls: ['./animalcard.component.scss']
})
export class AnimalcardComponent {
  @Input() animal!: IAnimal;
  @Output() AnimalClick = new EventEmitter<IAnimal>();
  constructor(private router: Router) { }
  goToAnimal() {
    this.AnimalClick.emit(this.animal);
  }



}
