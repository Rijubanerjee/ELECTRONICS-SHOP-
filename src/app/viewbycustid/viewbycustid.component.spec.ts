import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbycustidComponent } from './viewbycustid.component';

describe('ViewbycustidComponent', () => {
  let component: ViewbycustidComponent;
  let fixture: ComponentFixture<ViewbycustidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbycustidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbycustidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
