import { Component, OnInit } from '@angular/core';
import {ApiConfigurationService} from '../api-configuration.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentsData: [];
  showPopup = false;
  studentId : string;

  constructor(private apiService: ApiConfigurationService, private router: Router) { }

  ngOnInit(): void {
     this.getStudentsList();
  }

  getStudentsList(){
    this.apiService.getAllStudents().subscribe((res: any) => {
      if(res){
        this.studentsData = res;
        console.log(this.studentsData)
      }
    },
    (err) => {
      console.log(err)
    });
  }

  navigate(){
    this.router.navigateByUrl('/create-student')
  }


  confirmPopUp(val){
    this.showPopup = true;
    this.studentId = val;
  }

  closePopUp(){
    this.showPopup = false;
  }

  deleteStudent(){
    this.apiService.deleteStudentData(this.studentId).subscribe((res: any) => {
      if(res){
        window.location.reload();
        this.showPopup = false;
        this.getStudentsList();
      }
    },
    (err)=>{
      console.log(err)
    });
  }

}
