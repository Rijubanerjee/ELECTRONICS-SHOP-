import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid.component';

describe('ViewproductspecsbyproductidComponent', () => {
  let component: ViewproductspecsbyproductidComponent;
  let fixture: ComponentFixture<ViewproductspecsbyproductidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductspecsbyproductidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductspecsbyproductidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
