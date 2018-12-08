import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtvComponent } from './newtv.component';

describe('NewtvComponent', () => {
  let component: NewtvComponent;
  let fixture: ComponentFixture<NewtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
