import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizersAllComponent } from './fertilizers-all.component';

describe('FertilizersAllComponent', () => {
  let component: FertilizersAllComponent;
  let fixture: ComponentFixture<FertilizersAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizersAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
