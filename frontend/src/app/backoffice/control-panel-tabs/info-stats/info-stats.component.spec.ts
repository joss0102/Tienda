import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStatsComponent } from './info-stats.component';

describe('InfoStatsComponent', () => {
  let component: InfoStatsComponent;
  let fixture: ComponentFixture<InfoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
