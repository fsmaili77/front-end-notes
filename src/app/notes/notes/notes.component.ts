import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantService } from 'src/app/etudiant.service';
import { Matiere } from 'src/app/matiere/matiere';
import { MatiereService } from 'src/app/matiere/matiere.service';
import { NotesObject } from 'src/app/notes-object/notes-object';
import { NotesObjectService } from 'src/app/notes-object/notes-object.service';
import { Notes } from '../notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: Notes[];
  noteObjectEtudiant: any;
  moyennesClasses: any[] = [];
  notesListes: any;
  countNotes: any;
  moyenneGeneraleClasse: any;
  moyennes: any[] = [];

  private id_etudiant: any;

  constructor(private notesService: NotesService, 
              private _etudiantService: EtudiantService, 
              private _matiereService: MatiereService, 
              private _notesObjectService: NotesObjectService,
              private _noteObjectEtudiant: NotesObjectService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

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
    this.id_etudiant = this._activatedRoute.snapshot.paramMap.get('id');

    if (this.id_etudiant != null) {
      this._notesObjectService.getNotesObjectOfEtudiant(this.id_etudiant).toPromise().then((res: any) => {
        this.noteObjectEtudiant = res
        this.notesListes = res.notesList
        this.countNotes = res.notesList.length
        for (let i = 0; i < this.countNotes; i++) {
          var nom_matiere = this.notesListes[i].nomMatiere
          this._notesObjectService.getMoyenneClasseByMatiere(nom_matiere).subscribe((res: any) => {
            this.moyennesClasses.push(res)
          })
        }
      });
      this._notesObjectService.getMoyenneGeneraleClasse().toPromise().then((res: any) => {
        this.moyenneGeneraleClasse = res
      })
    } else {
      this._router.navigate(['etudiants'])
    }
  }

}
