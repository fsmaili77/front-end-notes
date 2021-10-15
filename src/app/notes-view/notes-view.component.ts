import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Notes } from '../notes/notes';
import { NotesService } from '../notes/notes.service';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  public etudiants: Etudiant[];
  public editEtudiant: Etudiant;
  public deleteEtudiant: Etudiant;

  public notes: Notes[];

  constructor(private etudiantService: EtudiantService, private _notesService: NotesService) { }

  ngOnInit() {
    this.getEtudiants();
    this._notesService.getNotes().subscribe(res => {
      this.notes = res;
    })
  }

  public getEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe(
      (response: Etudiant[]) => {
        this.etudiants = response;
        console.log(this.etudiants);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEtudiant(addForm: NgForm): void {
    document.getElementById('add-etudiant-form').click();
    this.etudiantService.addEtudiant(addForm.value).subscribe(
      (response: Etudiant) => {
        console.log(response);
        this.getEtudiants();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEtudiant(etudiant: Etudiant): void {
    this.etudiantService.updateEtudiant(etudiant).subscribe(
      (response: Etudiant) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEtudiant(etudiantId: number): void {
    this.etudiantService.deleteEtudiant(etudiantId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEtudiants(key: string): void {
    const results: Etudiant[] = [];
    for ( const etudiant of this.etudiants) {
      if (etudiant.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || etudiant.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || etudiant.dateNaissance.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || etudiant.email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(etudiant);
      }
    }
    this.etudiants = results;
    if (results.length === 0 || !key) {
      this.getEtudiants();
    }
  }

  public onOpenModal(etudiant: Etudiant, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEtudiantModal');
    }
    if (mode === 'edit') {
      this.editEtudiant = etudiant;
      button.setAttribute('data-target', '#updateEtudiantModal');
    }
    if (mode === 'delete') {
      this.deleteEtudiant = etudiant;
      button.setAttribute('data-target', '#deleteEtudiantModal');
    }
    container.appendChild(button);
    button.click();
  }

}
