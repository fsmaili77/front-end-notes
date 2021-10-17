import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Matiere } from '../matiere/matiere';
import { MatiereService } from '../matiere/matiere.service';
import { Notes } from '../notes/notes';
import { NotesService } from '../notes/notes.service';
import { NotesObject } from './notes-object';
import { NotesObjectService } from './notes-object.service';

@Component({
  selector: 'app-notes-object',
  templateUrl: './notes-object.component.html',
  styleUrls: ['./notes-object.component.css']
})
export class NotesObjectComponent implements OnInit {

  noteByEtudiantVisibility: boolean;

  public notesObject: NotesObject[];
  noteObjectEtudiant: any;

  listMoyenneClasseParMatiere: any;

  moyenneClasseByMatiereFrancais: any;
  moyenneClasseByMatiereAnglais: any;
  moyenneClasseByMatiereMath: any;

  public notes: Notes[];
  public etudiants: Etudiant[];
  public matieres: Matiere[];

  constructor(private notesObjectService: NotesObjectService, private _notesService: NotesService, private _etudiantService: EtudiantService, private _matiereService: MatiereService) { }

  public getNotesObject(): void {
    this.notesObjectService.getNotesObject().toPromise().then(
      (response: NotesObject[]) => {
        this.notesObject = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error)
      }
    );
  }

  public getNotesObjectsByEtudiant(id_etudiant: number) {
    this.notesObjectService.getNotesObjectOfEtudiant(id_etudiant).toPromise().then((res: any) => {
      this.noteObjectEtudiant.push(res)
    })
  }

  public getMoyenneClasseByMatiereAnglais(nom_matiere: string) {
    this.notesObjectService.getMoyenneClasseByMatiere(nom_matiere).toPromise().then((res: any) => {
      this.moyenneClasseByMatiereAnglais = res
      this.listMoyenneClasseParMatiere.push(this.moyenneClasseByMatiereAnglais)
    })
  }
  public getMoyenneClasseByMatiereMath(nom_matiere: string) {
    this.notesObjectService.getMoyenneClasseByMatiere(nom_matiere).toPromise().then((res: any) => {
      this.moyenneClasseByMatiereMath = res
      this.listMoyenneClasseParMatiere.push(this.moyenneClasseByMatiereMath)
    })
  }
  public getMoyenneClasseByMatiereFrancais(nom_matiere: string) {
    this.notesObjectService.getMoyenneClasseByMatiere(nom_matiere).toPromise().then((res: any) => {
      this.moyenneClasseByMatiereFrancais = res
      this.listMoyenneClasseParMatiere.push(this.moyenneClasseByMatiereFrancais)
    })
  }
  ngOnInit() {
    this.noteByEtudiantVisibility = true;
    this.noteObjectEtudiant = [];
    this.getNotesObject();
    this.getMoyenneClasseByMatiereAnglais("Anglais");
    this.getMoyenneClasseByMatiereFrancais("Francais");
    this.getMoyenneClasseByMatiereMath("Math");
    console.log(this.getNotesObject())

    this.listMoyenneClasseParMatiere = [];
    console.log(this.listMoyenneClasseParMatiere)

    this._etudiantService.getEtudiants().subscribe(res => {
      this.etudiants = res;
      for (let i = 0; i < res.length; i++) {
        this.getNotesObjectsByEtudiant(this.etudiants[i].id);
      }
    });
    this._notesService.getNotes().subscribe(res => {
      this.notes = res;
    });
    this._matiereService.getMatieres().subscribe(res => {
      this.matieres = res;
    });
    console.log(this.noteObjectEtudiant)
  }

  setVisibility() {
    if (this.noteByEtudiantVisibility) {
      this.noteByEtudiantVisibility = false
    } else {
      this.noteByEtudiantVisibility = true
    }
  }
}
