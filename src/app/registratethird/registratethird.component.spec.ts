import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratethirdComponent } from './registratethird.component';

describe('RegistratethirdComponent', () => {
  let component: RegistratethirdComponent;
  let fixture: ComponentFixture<RegistratethirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratethirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratethirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
