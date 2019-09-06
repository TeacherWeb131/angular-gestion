import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Student } from "./student";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StudentsService {
  // un Subject est un observable qui va emmettre un évènement
  // quand on va l'activer (avec la methode next())
  dataChanged = new Subject();

  constructor(private http: HttpClient) {}

  // Récupérer les students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(
      "http://5d70b803d3448a001411ad63.mockapi.io/students"
    );
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(
      "http://5d70b803d3448a001411ad63.mockapi.io/students" + "/" + id
    );
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(
      "http://5d70b803d3448a001411ad63.mockapi.io/students" + "/" + student.id,
      student
    );
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(
      "http://5d70b803d3448a001411ad63.mockapi.io/students" + "/" + id
    );
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      "http://5d70b803d3448a001411ad63.mockapi.io/students",
      student
    );
  }
}
