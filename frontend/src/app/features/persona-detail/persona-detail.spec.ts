import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { PersonaDetail } from './persona-detail';

describe('PersonaDetail', () => {
  let component: PersonaDetail;
  let fixture: ComponentFixture<PersonaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaDetail],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
