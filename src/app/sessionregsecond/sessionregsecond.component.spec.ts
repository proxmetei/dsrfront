import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionregsecondComponent } from './sessionregsecond.component';

describe('SessionregsecondComponent', () => {
  let component: SessionregsecondComponent;
  let fixture: ComponentFixture<SessionregsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionregsecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionregsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
