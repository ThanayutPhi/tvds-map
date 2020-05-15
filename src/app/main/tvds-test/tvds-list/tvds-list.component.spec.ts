import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvdsListComponent } from './tvds-list.component';

describe('TvdsListComponent', () => {
  let component: TvdsListComponent;
  let fixture: ComponentFixture<TvdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvdsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
