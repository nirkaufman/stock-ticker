import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProtfolioComponent } from './my-protfolio.component';

describe('MyProtfolioComponent', () => {
  let component: MyProtfolioComponent;
  let fixture: ComponentFixture<MyProtfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProtfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProtfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
