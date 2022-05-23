import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalcardComponent } from './animalcard.component';

describe('AnimalcardComponent', () => {
  let component: AnimalcardComponent;
  let fixture: ComponentFixture<AnimalcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalcardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
