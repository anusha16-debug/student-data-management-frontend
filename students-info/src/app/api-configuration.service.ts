import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigurationService {

  baseUrl: string = 'http://localhost:3000/api';
 URL_CONFIGURATION_MODULE: any;

  

  constructor(private http : HttpClient) {

    this.URL_CONFIGURATION_MODULE = {

      'getStudents': this.baseUrl + '/students',
      'addStudent': this.baseUrl + '/student'
    }

   }

   getAllStudents(){
      return this.http.get(this.URL_CONFIGURATION_MODULE.getStudents);
  }

  addStudentData(data): Observable<any>{
    // console.log(data)
    return this.http.post(this.URL_CONFIGURATION_MODULE.addStudent, data);
  }

  
}
