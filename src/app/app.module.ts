import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from './etudiant.service';
import { NotesComponent } from './notes/notes/notes.component';
import { NotesService } from './notes/notes.service';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereService } from './matiere/matiere.service';
import { NotesObjectComponent } from './notes-object/notes-object.component';
import { NotesObjectService } from './notes-object/notes-object.service';
import { AuthComponent } from './auth/auth.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'etudiants', component: NotesViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'notes', component: NotesComponent},
  { path: 'notesObject', component: NotesObjectComponent},
  { path: '', component: NotesViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    MatiereComponent,
    NotesObjectComponent,
    AuthComponent,
    NotesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EtudiantService, NotesService, MatiereService, NotesObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
