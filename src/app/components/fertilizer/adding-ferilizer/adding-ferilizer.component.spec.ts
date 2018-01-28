import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFerilizerComponent } from './add-ferilizer.component';

describe('AddFerilizerComponent', () => {
  let component: AddFerilizerComponent;
  let fixture: ComponentFixture<AddFerilizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFerilizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFerilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
