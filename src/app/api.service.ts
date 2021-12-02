import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient){
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');


  }

  addStudent(data){
    return this.http.post('http://localhost/Ionic_CRUD_APP/backend/create.php', data);
  }

  getStudents(){
    return this.http.get('http://localhost/Ionic_CRUD_APP/backend/getstudents.php');
  }

  deleteStudent(id){
    return this.http.delete('http://localhost/Ionic_CRUD_APP/backend/delete.php?id='+id);
  }

  getStudent(id){
    return this.http.get('http://localhost/Ionic_CRUD_APP/backend/getStudent.php?id='+id);
  }

  updateStudent(id,data){
    return this.http.put('http://localhost/Ionic_CRUD_APP/backend/updateStudent.php?id='+id,data);
  }
}


