import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewitemsbycustComponent } from './viewitemsbycust.component';

describe('ViewitemsbycustComponent', () => {
  let component: ViewitemsbycustComponent;
  let fixture: ComponentFixture<ViewitemsbycustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewitemsbycustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewitemsbycustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
