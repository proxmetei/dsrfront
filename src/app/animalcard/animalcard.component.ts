import { Component, Input, OnInit } from '@angular/core';
import {IAnimal} from './../animal/animal.interface';
@Component({
  selector: 'app-animalcard',
  templateUrl: './animalcard.component.html',
  styleUrls: ['./animalcard.component.scss']
})
export class AnimalcardComponent implements OnInit {
  @Input() animal!: IAnimal;
  constructor() { }

  ngOnInit(): void {
    // let url = URL.createObjectURL(this.animal.img.files[0]);
    // var img = document.getElementById("animalCardImg");
    // img?.setAttribute('src', url);
    let reader = new FileReader();
    // console.log(this.animal.img.files[0])
    const file = this.animal.img.files[0];
    const formData = new FormData();
    formData.append("thumbnail", file);
    console.log(formData);
    reader.readAsDataURL(this.animal.img.files[0]); 
    var img = document.getElementById("animalCardImg");
    reader.addEventListener("load", function () {
     img?.setAttribute('src', reader.result?.toString()!);
    }, false);
    console.log(this.animal.img.files[0]);
  }

}
