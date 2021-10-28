import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesObjectComponent } from './notes-object/notes-object.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NotesComponent } from './notes/notes/notes.component';

const routes: Routes = [
  { path: 'etudiants', component: NotesViewComponent},
  { path: 'notes', component: NotesComponent},
  { path: 'notesObject', component: NotesObjectComponent},
  { path: '', component: NotesViewComponent},
  { path: 'noteOfEtudiant/:id', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
