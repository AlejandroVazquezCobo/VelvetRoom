import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, PersonaInput } from '../models/persona';

const API_URL = 'http://localhost:3000/api/personas';

@Service()
export class PersonaService {
  private http = inject(HttpClient);

  listar(arcana?: string): Observable<Persona[]> {
    const url = arcana ? `${API_URL}?arcana=${arcana}` : API_URL;
    return this.http.get<Persona[]>(url);
  }

  obtener(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${API_URL}/${id}`);
  }

  crear(persona: PersonaInput): Observable<Persona> {
    return this.http.post<Persona>(API_URL, persona);
  }

  actualizar(id: string, persona: Partial<PersonaInput>): Observable<Persona> {
    return this.http.put<Persona>(`${API_URL}/${id}`, persona);
  }

  borrar(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
