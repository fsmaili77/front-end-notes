import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from './etudiant';
import { EtudiantService } from './etudiant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public etudiants: Etudiant[];
  /* public editEtudiant: Etudiant;
  public deleteEtudiant: Etudiant; */

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.getEtudiants();
  }

  public getEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe(
      (response: Etudiant[]) => {
        this.etudiants = response;
        console.log(response);
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
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
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
      
      button.setAttribute('data-target', '#updateEtudiantModal');
    }
    if (mode === 'delete') {
      
      button.setAttribute('data-target', '#deleteEtudiantModal');
    }
    container.appendChild(button);
    button.click();
  }

}
