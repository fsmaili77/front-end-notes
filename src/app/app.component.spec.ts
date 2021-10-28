import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let http: HttpClient;

  let url = "http://localhost:8080/"

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    http = TestBed.inject(HttpClient);

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should get notes', (done) => {
    http.get(`${url}/note/all`).subscribe((res: any) => {
      expect(res.length).toBe(36);
      done()
    })
  });
  it('should get etudiants', (done) => {
    http.get(`${url}/etudiant/all`).subscribe((res: any) => {
      expect(res.length).toBe(6);
      done()
    })
  });
  it('should get matieres', (done) => {
    http.get(`${url}/matiere/all`).subscribe((res: any) => {
      expect(res.length).toBe(6);
      done()
    })
  });


  /* it(`should have as title 'gestionnairenotes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gestionnairenotes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('gestionnairenotes app is running!');
  }); */
});
