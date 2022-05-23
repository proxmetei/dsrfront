import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {IAnimal} from './../animal/animal.interface';
@Component({
  selector: 'app-animalcard',
  templateUrl: './animalcard.component.html',
  styleUrls: ['./animalcard.component.scss']
})
export class AnimalcardComponent implements OnInit, OnChanges {
  @Input() animal!: IAnimal;
  @Output() onAnimalClick = new EventEmitter<IAnimal>();
  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let myId = "animalCardImg"+this.animal.myId;
    console.log(myId);
    var img = document.getElementById(myId);
    console.log(img);
    // reader.addEventListener("load", function () {
    //  img?.setAttribute('src', reader.result?.toString()!);
    // }, false);
    console.log(this.animal)
    img?.setAttribute('src', this.animal.document.data);
  }
  goToAnimal(){
    console.log("nav");
    this.onAnimalClick.emit(this.animal);
  }
  ngOnInit(): void {
    // let url = URL.createObjectURL(this.animal.img.files[0]);
    // var img = document.getElementById("animalCardImg");
    // img?.setAttribute('src', url);
    let reader = new FileReader();
    // console.log(this.animal.img.files[0])
    // const file = this.animal.img.files[0];
    // const formData = new FormData();
    // formData.append("thumbnail", file);
    // console.log(formData);
    // reader.readAsDataURL(this.animal.img.files[0]); 

    // console.log(this.animal.img.files[0]);
  }
  ngOnChanges(): void {
    let id= "animalCardImg"+this.animal.id;
    console.log(id)
    var img = document.getElementById(id);
    console.log(img);
      console.log(this.animal)
  }


}
