import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistitemComponent } from './userlistitem.component';

describe('UserlistitemComponent', () => {
  let component: UserlistitemComponent;
  let fixture: ComponentFixture<UserlistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
