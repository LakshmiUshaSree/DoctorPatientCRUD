import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { AddpatientComponent } from 'src/app/patient/addpatient/addpatient.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  doctors: Doctor[] = [];
  loading: boolean=false;

  constructor(public doctorService: DoctorService,
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
    this.doctorService.getAll().subscribe((data: Doctor[])=>{
     
      this.doctors = data;
      console.log(this.doctors);
  })
  {
    this.loading = true;
    this.doctorService.getAll().subscribe((data: Doctor[]) => {
      this.loading = false;
      this.doctors = data;
      console.log(this.doctors);


  })
};
  
  }
}
