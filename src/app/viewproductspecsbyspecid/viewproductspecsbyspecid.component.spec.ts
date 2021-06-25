import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid.component';

describe('ViewproductspecsbyspecidComponent', () => {
  let component: ViewproductspecsbyspecidComponent;
  let fixture: ComponentFixture<ViewproductspecsbyspecidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductspecsbyspecidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductspecsbyspecidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
