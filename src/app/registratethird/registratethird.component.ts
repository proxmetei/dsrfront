import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, } from '@angular/core';
import { Router } from '@angular/router';
import { ModalanimalComponent } from '../modal/modalanimal/modalanimal.component';
import { UserService } from '../user.service';
import { IAnimal } from './../animal/animal.interface';
@Component({
  selector: 'app-registratethird',
  templateUrl: './registratethird.component.html',
  styleUrls: ['./registratethird.component.scss']
})
export class RegistratethirdComponent implements OnInit {

  animals!: IAnimal[]
  @ViewChild('modalForAnimal', { read: ViewContainerRef }) containerAnimal!: { clear: () => void; createComponent: (arg0: ComponentFactory<ModalanimalComponent>) => any; };
  constructor(private resolver: ComponentFactoryResolver, private dataService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.animals = [];
  }
  addAnimal() {
    let bg = document.getElementById("bg");
    bg?.classList.add("bg");
    this.containerAnimal.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalanimalComponent);
    const n = this.containerAnimal.createComponent(modalFactoryNote);
    n.instance.edit = false;
    n.instance.submitModal.subscribe(() => {
      this.containerAnimal.clear();
      this.animals = this.dataService.animals;
      bg?.classList.remove("bg");
    });
  }
  registrate() {
    this.dataService.register().subscribe((res) => { });

    this.router.navigate(['/lk']);
  }
}
