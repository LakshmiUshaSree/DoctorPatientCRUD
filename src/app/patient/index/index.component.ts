import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { CreateComponent } from 'src/app/doctor/create/create.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  patients: Patient[] = [];
  loading: boolean=false;

  constructor(public patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef : MatDialog) { }

    openDialog(){
      this.dialogRef.open(CreateComponent);
    }
    
    openDialogg(){
      this.dialogRef.open(AddpatientComponent)
    }

  ngOnInit(): void {
    this.patientService.getAll().subscribe((data: Patient[])=>{
     
          this.patients = data;
          console.log(this.patients);
      })
      {
        this.loading = true;
        this.patientService.getAll().subscribe((data: Patient[]) => {
          this.loading = false;
          this.patients = data;
          console.log(this.patients);
    
    
      })
    };
  }
}

