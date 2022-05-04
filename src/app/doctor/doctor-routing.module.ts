import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'doctor', redirectTo: 'doctor/index', pathMatch: 'full'},
  { path: 'doctor/index', component: IndexComponent },
  { path: 'doctor/:id/:doctorId/view', component: ViewComponent },
  { path: 'doctor/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
