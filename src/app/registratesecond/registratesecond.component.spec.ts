import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratesecondComponent } from './registratesecond.component';

describe('RegistratesecondComponent', () => {
  let component: RegistratesecondComponent;
  let fixture: ComponentFixture<RegistratesecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratesecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
