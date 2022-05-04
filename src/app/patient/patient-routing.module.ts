import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'patient', redirectTo: 'patient/index', pathMatch: 'full'},
  { path: 'patient/index', component: IndexComponent },
  { path: 'patient/:id/:patientId/view', component: ViewComponent },
  { path: 'patient/addpatient', component: AddpatientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
