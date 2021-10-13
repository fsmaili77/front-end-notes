import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantService } from 'src/app/etudiant.service';
import { Matiere } from 'src/app/matiere/matiere';
import { MatiereService } from 'src/app/matiere/matiere.service';
import { Notes } from '../notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: Notes[];
  public etudiants: Etudiant[];
  public matieres: Matiere[];

  constructor(private notesService: NotesService, private _etudiantService: EtudiantService, private _matiereService: MatiereService) { }

  public getNotes(): void {
    this.notesService.getNotes().subscribe(
      (response: Notes[]) => {
        this.notes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit() {
    this.getNotes();
    this._etudiantService.getEtudiants().subscribe(res => {
      this.etudiants = res;
    });
    this._matiereService.getMatieres().subscribe(res => {
      this.matieres = res;
    })
    //this.etudiants = this._etudiantService.getEtudiants();
  }

}
