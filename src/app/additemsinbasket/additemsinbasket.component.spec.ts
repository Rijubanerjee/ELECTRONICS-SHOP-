import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemsinbasketComponent } from './additemsinbasket.component';

describe('AdditemsinbasketComponent', () => {
  let component: AdditemsinbasketComponent;
  let fixture: ComponentFixture<AdditemsinbasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemsinbasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemsinbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
