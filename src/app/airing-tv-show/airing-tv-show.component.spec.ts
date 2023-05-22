import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringTvShowComponent } from './airing-tv-show.component';

describe('AiringTvShowComponent', () => {
  let component: AiringTvShowComponent;
  let fixture: ComponentFixture<AiringTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiringTvShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiringTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
