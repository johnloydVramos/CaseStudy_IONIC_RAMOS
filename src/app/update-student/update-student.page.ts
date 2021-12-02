import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id:any;
  student_no:any;
  student_name:any;
  student_add:any;
  student_course:any;
  student_year:any;

  constructor(
    private route: ActivatedRoute, private router: Router, private _apiService: ApiService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
   }

  ngOnInit() {
  }

  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      let student = res[0];
      this.student_no = student.student_no;
      this.student_name = student.student_name;
      this.student_add = student.student_add;
      this.student_course = student.student_course;
      this.student_year = student.student_year;
    },(err:any)=>{
      console.log("ERROR", err);
    })
  }

  updateStudent(){
    let data = {
      student_no: this.student_no,
      student_name: this.student_name,
      student_add: this.student_add,
      student_course: this.student_course,
      student_year: this.student_year
    }
    this._apiService.updateStudent(this.id,data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/home');
    },(err:any)=>{
      console.log("ERROR",err);
    }
      )
  }
}
