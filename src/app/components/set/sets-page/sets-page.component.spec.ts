import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerilizersSetsComponent } from './ferilizers-sets.component';

describe('FerilizersSetsComponent', () => {
  let component: FerilizersSetsComponent;
  let fixture: ComponentFixture<FerilizersSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerilizersSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerilizersSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
