import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksSelectorComponent } from './stocks-selector.component';

describe('StocksSelectorComponent', () => {
  let component: StocksSelectorComponent;
  let fixture: ComponentFixture<StocksSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
