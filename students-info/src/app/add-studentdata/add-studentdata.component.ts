import { Component, OnInit } from '@angular/core';
import { ApiConfigurationService } from '../api-configuration.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-studentdata',
  templateUrl: './add-studentdata.component.html',
  styleUrls: ['./add-studentdata.component.css']
})
export class AddStudentdataComponent implements OnInit {

  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  class: string;
  section: string;
  grades: string;

  constructor(private apiService: ApiConfigurationService,private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  charactersOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  addStudentData(){
    const params = {
      first_name: this.firstName,
      last_name: this.lastName,
      phone: this.phoneNumber,
      address: this.address,
      class: this.class,
      section: this.section,
      grades: this.grades
    }
    this.apiService.addStudentData(params).subscribe((res: any) => {
      if(res){
        this.messageService.add({severity:'success', summary:'Success Message', detail:'Data submitted successfully'});
        
        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 5000)
        

      }
    },
    (err) => {
       console.log(err)
    });
  }
}
