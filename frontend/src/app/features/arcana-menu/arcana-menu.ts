import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaService } from '../../core/services/persona';
import { ARCANAS, ARCANA_LABELS, ARCANA_IMAGES, Arcana } from '../../core/models/persona';

@Component({
  selector: 'app-arcana-menu',
  imports: [RouterLink],
  templateUrl: './arcana-menu.html',
  styleUrl: './arcana-menu.scss',
})
export class ArcanaMenu implements OnInit {
  private personaService = inject(PersonaService);

  protected readonly arcanas = ARCANAS;
  protected readonly labels = ARCANA_LABELS;
  protected readonly images = ARCANA_IMAGES;
  protected readonly conteos = signal<Partial<Record<Arcana, number>>>({});
  protected readonly cargando = signal(true);

  ngOnInit(): void {
    this.personaService.listar().subscribe({
      next: (personas) => {
        const conteo: Partial<Record<Arcana, number>> = {};
        for (const persona of personas) {
          conteo[persona.arcana] = (conteo[persona.arcana] ?? 0) + 1;
        }
        this.conteos.set(conteo);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }
}
