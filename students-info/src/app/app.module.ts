import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentdataComponent } from './add-studentdata/add-studentdata.component';
import {ApiConfigurationService} from './api-configuration.service';
import { HttpClientModule} from '@angular/common/http';
import { CommonHeaderComponent } from './common-header/common-header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentdataComponent,
    CommonHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
