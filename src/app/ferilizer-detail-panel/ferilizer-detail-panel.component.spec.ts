import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerilizerDetailPanelComponent } from './ferilizer-detail-panel.component';

describe('FerilizerDetailPanelComponent', () => {
  let component: FerilizerDetailPanelComponent;
  let fixture: ComponentFixture<FerilizerDetailPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerilizerDetailPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerilizerDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
