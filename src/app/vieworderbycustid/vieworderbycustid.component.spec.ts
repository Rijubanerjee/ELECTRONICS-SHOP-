import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderbycustidComponent } from './vieworderbycustid.component';

describe('VieworderbycustidComponent', () => {
  let component: VieworderbycustidComponent;
  let fixture: ComponentFixture<VieworderbycustidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderbycustidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderbycustidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
