import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Matiere } from './matiere';
import { MatiereService } from './matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  public matieres: Matiere[];
  public etudiants: Etudiant[];

  constructor(private matiereService: MatiereService, private _etudiantService: EtudiantService) { }

  public getMatieres(): void {
    this.matiereService.getMatieres().subscribe(
      (response: Matiere[]) => {
        this.matieres = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getMatieres();
    this._etudiantService.getEtudiants().subscribe(res => {
      this.etudiants = res;
    });
  }

}
