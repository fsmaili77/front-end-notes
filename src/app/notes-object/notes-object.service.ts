import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotesObject } from './notes-object';

@Injectable({
  providedIn: 'root'
})
export class NotesObjectService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getNotesObject(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/globale/all`);
  }

  getNotesObjectOfEtudiant(id_etudiant: number): any {
    return this.http.get<any>(`${this.apiServerUrl}/etudiant/Etudiant/allMoyenne/` + id_etudiant)
  }

  getMoyenneClasseByMatiere(nom_matiere: string): any{
    return this.http.get<any>(`${this.apiServerUrl}/etudiant/classe/allMoyenne/` + nom_matiere)
  }

  getMoyenneGeneraleClasse(): any {
    return this.http.get<any>(`${this.apiServerUrl}/etudiant/Etudiant/moyenneGeneraleClasse`)
  }
}
