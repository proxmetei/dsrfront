import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalwallComponent } from './animalwall.component';

describe('AnimalwallComponent', () => {
  let component: AnimalwallComponent;
  let fixture: ComponentFixture<AnimalwallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalwallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
