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

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    MatiereComponent,
    NotesObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EtudiantService, NotesService, MatiereService, NotesObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
