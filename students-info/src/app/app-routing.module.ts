import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentdataComponent } from './add-studentdata/add-studentdata.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {
    path: '' , component: StudentsListComponent
  },
  {
    path: 'create-student', component: AddStudentdataComponent
  },
  {
    path: 'update-student/:id', component: UpdateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
