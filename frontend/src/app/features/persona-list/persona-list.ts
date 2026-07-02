import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PersonaService } from '../../core/services/persona';
import { Persona, ARCANA_LABELS, ARCANA_IMAGES, Arcana } from '../../core/models/persona';

@Component({
  selector: 'app-persona-list',
  imports: [RouterLink],
  templateUrl: './persona-list.html',
  styleUrl: './persona-list.scss',
})
export class PersonaList implements OnInit {
  private route = inject(ActivatedRoute);
  private personaService = inject(PersonaService);

  protected readonly labels = ARCANA_LABELS;
  protected readonly images = ARCANA_IMAGES;
  protected readonly arcana = signal<Arcana | null>(null);
  protected readonly personas = signal<Persona[]>([]);
  protected readonly cargando = signal(true);

  ngOnInit(): void {
    const arcana = this.route.snapshot.paramMap.get('arcana') as Arcana;
    this.arcana.set(arcana);

    this.personaService.listar(arcana).subscribe({
      next: (personas) => {
        this.personas.set(personas);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }
}
