import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionregComponent } from './sessionreg.component';

describe('SessionregComponent', () => {
  let component: SessionregComponent;
  let fixture: ComponentFixture<SessionregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
