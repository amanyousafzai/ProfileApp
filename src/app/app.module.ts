import { NO_ERRORS_SCHEMA, NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { InvitememberComponent } from './invitemember/invitemember.component';
import { MissionstatementComponent } from './missionstatement/missionstatement.component';
import { CareersComponent } from './careers/careers.component';
import {CreateComponent} from './create/create.component'
import { UpdateComponent} from './update/update.component'
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { ChartsLibraryComponent } from './charts-library/charts-library.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    DashboardComponent,
    ListComponent,
    LoginComponent,
    CreateComponent,
    CareersComponent,
    MissionstatementComponent,
    InvitememberComponent,
    UpdateComponent,
    ViewdetailComponent,
    ChartsLibraryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
    
  

   
  ],
  // schemas: [NO_ERRORS_SCHEMA], 
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
