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

  deleteStudent(val){
    this.showPopup = true;
    this.apiService.deleteStudentData(val).subscribe((res: any) => {
      if(res){
        window.location.reload();
        this.getStudentsList();
      }
    },
    (err)=>{
      console.log(err)
    });
  }

}
