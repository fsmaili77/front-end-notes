import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Etudiant } from "./etudiant";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EtudiantService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEtudiants(): Observable<Etudiant[]> {
        return this.http.get<Etudiant[]>(`${this.apiServerUrl}/etudiant/all`);
    }
    public addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
        return this.http.post<Etudiant>(`${this.apiServerUrl}/etudiant/add`, etudiant);
    }
    public updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
        return this.http.put<Etudiant>(`${this.apiServerUrl}/etudiant/update`, etudiant);
    }
    public deleteEtudiant(etudiantId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/etudiant/delete/${etudiantId}`);
    }
    
    
}