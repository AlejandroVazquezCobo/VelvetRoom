import { Routes } from '@angular/router';
import { ArcanaMenu } from './features/arcana-menu/arcana-menu';
import { PersonaList } from './features/persona-list/persona-list';
import { PersonaDetail } from './features/persona-detail/persona-detail';
import { PersonaForm } from './features/persona-form/persona-form';

export const routes: Routes = [
  { path: '', component: ArcanaMenu },
  { path: 'arcana/:arcana', component: PersonaList },
  { path: 'persona/nuevo', component: PersonaForm },
  { path: 'persona/:id', component: PersonaDetail },
  { path: 'persona/:id/editar', component: PersonaForm },
  { path: '**', redirectTo: '' },
];
