import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCityComponent } from './results-city.component';

describe('ResultsCityComponent', () => {
  let component: ResultsCityComponent;
  let fixture: ComponentFixture<ResultsCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
