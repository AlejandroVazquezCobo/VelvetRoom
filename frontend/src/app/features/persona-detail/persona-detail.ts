import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PersonaService } from '../../core/services/persona';
import { Persona, ARCANA_LABELS, ARCANA_IMAGES } from '../../core/models/persona';

@Component({
  selector: 'app-persona-detail',
  imports: [RouterLink],
  templateUrl: './persona-detail.html',
  styleUrl: './persona-detail.scss',
})
export class PersonaDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private personaService = inject(PersonaService);

  // Tope clásico de stats en Persona/SMT: la barra llena siempre representa 99, sea cual sea el valor real.
  protected readonly STAT_MAXIMO = 99;

  protected readonly labels = ARCANA_LABELS;
  protected readonly images = ARCANA_IMAGES;
  protected readonly persona = signal<Persona | null>(null);
  protected readonly cargando = signal(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.personaService.obtener(id).subscribe({
      next: (persona) => {
        this.persona.set(persona);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }

  borrar(): void {
    const persona = this.persona();
    if (!persona) return;
    if (!confirm(`¿Borrar a ${persona.nombre} del compendio?`)) return;

    this.personaService.borrar(persona._id).subscribe(() => {
      this.router.navigate(['/arcana', persona.arcana]);
    });
  }
}
