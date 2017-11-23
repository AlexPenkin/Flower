import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerilizersSetsDetailPanelComponent } from './ferilizers-sets-detail-panel.component';

describe('FerilizersSetsDetailPanelComponent', () => {
  let component: FerilizersSetsDetailPanelComponent;
  let fixture: ComponentFixture<FerilizersSetsDetailPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerilizersSetsDetailPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerilizersSetsDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
