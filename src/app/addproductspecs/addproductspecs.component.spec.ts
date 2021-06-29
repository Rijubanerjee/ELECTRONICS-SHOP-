import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductspecsComponent } from './addproductspecs.component';

describe('AddproductspecsComponent', () => {
  let component: AddproductspecsComponent;
  let fixture: ComponentFixture<AddproductspecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductspecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
