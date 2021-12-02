import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  student_no: any;
  student_name: any;
  student_add: any;
  student_course: any;
  student_year: any;
  students: any = [];


  constructor(public _apiService: ApiService) {
    //this.getStudents();
  }

  addStudent(){
  let data = {
    student_no: this.student_no,
    student_name: this.student_name,
    student_add: this.student_add,
    student_course: this.student_course,
    student_year: this.student_year,

  }

  this._apiService.addStudent(data).subscribe((res:any) =>{
    console.log("Success ==", res);
    this.student_no = '';
    this.student_name = '';
    this.student_add = '';
    this.student_course = '';
    this.student_year = '';
    alert("SUCCESS");
  },(error:any) =>{
    alert('ERROR');
    console.log("Error==", error);
  })
  }

  getStudents(){
    this._apiService.getStudents().subscribe((res:any)=>{
      console.log("SUCCESS ==", res);
      this.students = res;
    },(error:any)=>{
      console.log("ERROR==", error);
    })
  }

  deleteStudent(id){
    this._apiService.deleteStudent(id).subscribe((res:any)=>{
      console.log("SUCCESS");
      this.getStudents();
    }, (err:any)=>{
      console.log("ERROR");
    })
  }
}
