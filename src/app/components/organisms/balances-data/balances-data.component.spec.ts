import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesDataComponent } from './balances-data.component';

describe('BalancesDataComponent', () => {
  let component: BalancesDataComponent;
  let fixture: ComponentFixture<BalancesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
