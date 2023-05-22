import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTvShowComponent } from './top-rated-tv-show.component';

describe('TopRatedTvShowComponent', () => {
  let component: TopRatedTvShowComponent;
  let fixture: ComponentFixture<TopRatedTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedTvShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
