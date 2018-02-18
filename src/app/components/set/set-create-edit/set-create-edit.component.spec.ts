import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCreateEditComponent } from './set-create-edit.component';

describe('SetCreateEditComponent', () => {
  let component: SetCreateEditComponent;
  let fixture: ComponentFixture<SetCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
