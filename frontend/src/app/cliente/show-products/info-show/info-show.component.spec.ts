import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShowComponent } from './info-show.component';

describe('InfoShowComponent', () => {
  let component: InfoShowComponent;
  let fixture: ComponentFixture<InfoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
