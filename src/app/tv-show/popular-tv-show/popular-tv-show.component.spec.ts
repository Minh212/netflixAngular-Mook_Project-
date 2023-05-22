import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvShowComponent } from './popular-tv-show.component';

describe('PopularTvShowComponent', () => {
  let component: PopularTvShowComponent;
  let fixture: ComponentFixture<PopularTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTvShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
