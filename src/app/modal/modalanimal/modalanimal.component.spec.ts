import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalanimalComponent } from './modalanimal.component';

describe('ModalanimalComponent', () => {
  let component: ModalanimalComponent;
  let fixture: ComponentFixture<ModalanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalanimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
