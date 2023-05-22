import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingMovieComponent } from './playing-movie.component';

describe('PlayingMovieComponent', () => {
  let component: PlayingMovieComponent;
  let fixture: ComponentFixture<PlayingMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
