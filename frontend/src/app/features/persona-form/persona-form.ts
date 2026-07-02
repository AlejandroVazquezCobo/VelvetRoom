import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonaService } from '../../core/services/persona';
import { ARCANAS, ARCANA_LABELS, Arcana } from '../../core/models/persona';

@Component({
  selector: 'app-persona-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './persona-form.html',
  styleUrl: './persona-form.scss',
})
export class PersonaForm implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private personaService = inject(PersonaService);

  protected readonly arcanas = ARCANAS;
  protected readonly labels = ARCANA_LABELS;
  protected readonly editando = signal(false);
  protected readonly guardando = signal(false);
  protected readonly error = signal<string | null>(null);
  private personaId: string | null = null;

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    arcana: ['Fool' as Arcana, Validators.required],
    nivel: [1, [Validators.required, Validators.min(1), Validators.max(99)]],
    fuerza: [1, [Validators.required, Validators.min(1), Validators.max(99)]],
    magia: [1, [Validators.required, Validators.min(1), Validators.max(99)]],
    resistencia: [1, [Validators.required, Validators.min(1), Validators.max(99)]],
    agilidad: [1, [Validators.required, Validators.min(1), Validators.max(99)]],
    suerte: [1, [Validators.required, Validators.min(1), Validators.max(99)]],
    habilidades: [''],
    imagenUrl: [''],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.personaId = id;
    this.editando.set(true);
    this.personaService.obtener(id).subscribe((persona) => {
      this.form.patchValue({
        nombre: persona.nombre,
        arcana: persona.arcana,
        nivel: persona.nivel,
        fuerza: persona.stats.fuerza,
        magia: persona.stats.magia,
        resistencia: persona.stats.resistencia,
        agilidad: persona.stats.agilidad,
        suerte: persona.stats.suerte,
        habilidades: persona.habilidades.join(', '),
        imagenUrl: persona.imagenUrl,
      });
    });
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const payload = {
      nombre: v.nombre,
      arcana: v.arcana,
      nivel: v.nivel,
      stats: {
        fuerza: v.fuerza,
        magia: v.magia,
        resistencia: v.resistencia,
        agilidad: v.agilidad,
        suerte: v.suerte,
      },
      habilidades: v.habilidades
        .split(',')
        .map((h) => h.trim())
        .filter((h) => h.length > 0),
      imagenUrl: v.imagenUrl,
    };

    this.guardando.set(true);
    this.error.set(null);

    const peticion = this.personaId
      ? this.personaService.actualizar(this.personaId, payload)
      : this.personaService.crear(payload);

    peticion.subscribe({
      next: (persona) => this.router.navigate(['/persona', persona._id]),
      error: (err) => {
        this.error.set(err.error?.error ?? 'Error al guardar la Persona');
        this.guardando.set(false);
      },
    });
  }
}
