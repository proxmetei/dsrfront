import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionregthirdComponent } from './sessionregthird.component';

describe('SessionregthirdComponent', () => {
  let component: SessionregthirdComponent;
  let fixture: ComponentFixture<SessionregthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionregthirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionregthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
