import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclistitemComponent } from './doclistitem.component';

describe('DoclistitemComponent', () => {
  let component: DoclistitemComponent;
  let fixture: ComponentFixture<DoclistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoclistitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoclistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
