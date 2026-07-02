import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { PersonaList } from './persona-list';

describe('PersonaList', () => {
  let component: PersonaList;
  let fixture: ComponentFixture<PersonaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaList],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
