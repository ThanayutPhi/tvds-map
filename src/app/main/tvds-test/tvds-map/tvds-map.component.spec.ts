import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvdsMapComponent } from './tvds-map.component';

describe('TvdsMapComponent', () => {
  let component: TvdsMapComponent;
  let fixture: ComponentFixture<TvdsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvdsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvdsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
