import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { ArcanaMenu } from './arcana-menu';

describe('ArcanaMenu', () => {
  let component: ArcanaMenu;
  let fixture: ComponentFixture<ArcanaMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcanaMenu],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcanaMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
