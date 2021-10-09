import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matiere } from './matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMatieres(): Observable<any> {
    return this.http.get<Matiere[]>(`${this.apiServerUrl}/matiere/all`);
  }

  public addMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(`${this.apiServerUrl}/matiere/add`, matiere);
  }

  public updateMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>(`${this.apiServerUrl}/matiere/update`, matiere);
  }

  public deleteMatiere(matiereId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/matiere/delete/${matiereId}`);
  }

}
