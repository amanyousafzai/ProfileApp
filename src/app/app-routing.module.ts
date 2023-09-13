import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { ListComponent } from './list/list.component';
import { InvitememberComponent } from './invitemember/invitemember.component';
import { MissionstatementComponent } from './missionstatement/missionstatement.component';
import { CareersComponent } from './careers/careers.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'list/:id', component: ViewdetailComponent },
  { path: 'list', component: ListComponent },
  { path: 'invitemember', component: InvitememberComponent },
  { path: 'missionstatement', component: MissionstatementComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', component: NotFoundComponentComponent },
  { path: 'dashboard', component: DashboardComponent }

//   { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
