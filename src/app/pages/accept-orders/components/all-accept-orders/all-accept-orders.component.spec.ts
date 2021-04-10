import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcceptOrdersComponent } from './all-accept-orders.component';

describe('AllAcceptOrdersComponent', () => {
  let component: AllAcceptOrdersComponent;
  let fixture: ComponentFixture<AllAcceptOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAcceptOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAcceptOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
