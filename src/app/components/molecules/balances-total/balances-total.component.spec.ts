import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesTotalComponent } from './balances-total.component';

describe('BalancesTotalComponent', () => {
  let component: BalancesTotalComponent;
  let fixture: ComponentFixture<BalancesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancesTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
