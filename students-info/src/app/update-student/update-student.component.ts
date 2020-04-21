import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiConfigurationService } from '../api-configuration.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  
  studentID: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  class: string;
  section: string;
  grades: string;

  constructor(private apiservice: ApiConfigurationService, private messageService: MessageService, private activatedRoute: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
    this.getStudentDetailById();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  getStudentDetailById(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.studentID = params['id'];
      this.apiservice.getStudentById(this.studentID).subscribe((res: any) => {
        if(res){
            this.firstName = res.first_name,
            this.lastName = res.last_name,
            this.phoneNumber = res.phone,
            this.address = res.address,
            this.class = res.class,
            this.section = res.section,
            this.grades = res.grades
        }
      },
      (err) => {
        console.log(err)
      });
  })
}

updateStudentData(){
  const params = {
    first_name: this.firstName,
    last_name: this.lastName,
    phone: this.phoneNumber,
    address: this.address,
    class: this.class,
    section: this.section,
    grades: this.grades
  }
  this.apiservice.updateStudent(params, this.studentID).subscribe((res: any) => {
    if(res){
      // console.log(res)
      this.messageService.add({severity:'success', summary:'Success Message', detail:'Data updated successfully'});
      setTimeout(() => {
        this.router.navigateByUrl('');
      }, 5000)
    }
  })
}

}
