import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratefirstComponent } from './registratefirst.component';

describe('RegistratefirstComponent', () => {
  let component: RegistratefirstComponent;
  let fixture: ComponentFixture<RegistratefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratefirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
