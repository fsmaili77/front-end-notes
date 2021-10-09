import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: Notes[];

  constructor(private notesService: NotesService) { }

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
  }

}
