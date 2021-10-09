import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getNotes(): Observable<any> {
    return this.http.get<Notes[]>(`${this.apiServerUrl}/note/all`);
  }

  public addNote(note: Notes): Observable<Notes> {
    return this.http.post<Notes>(`${this.apiServerUrl}/note/add`, note);
  }

  public updateNote(note: Notes): Observable<Notes> {
    return this.http.put<Notes>(`${this.apiServerUrl}/note/update`, note);
  }
  public deleteNote(noteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/note/delete/${noteId}`);
  }
}
