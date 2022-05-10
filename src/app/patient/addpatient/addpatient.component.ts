import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from 'src/app/doctor/create/create.component';
import { DatePipe } from '@angular/common';
import { Patient } from '../patient';
import * as moment from 'moment';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {


  form: FormGroup;
  patient: Patient;
  age: string;
  constructor(public patientService: PatientService,
    private router: Router,
    public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      //  id : new FormControl('', [Validators.required]),
        patientid : new FormControl('', [Validators.required, Validators.maxLength(6),Validators.pattern("^[0-9]{1,6}")]),
        patientname: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$"),Validators.maxLength(50)]),
        age: new FormControl('', Validators.required),
        doctorname: new FormControl('', [Validators.required]),
        rxdate: new FormControl('', Validators.required),
      });
    }

    
    
    get f(){
      return this.form.controls;
    }
  
    submit(){
      console.log(this.form.value);
      this.patientService.create(this.form.value).subscribe(res => {
           console.log('Post created successfully!');
           this.router.navigateByUrl('patient/index');
           alert("Record Created Successfully!!!")
           window.location.reload();
      });
      
      checkdate()
        const date = moment(this.patient.Age).format('DD-MM-YYYY');
        console.log(date);
     
   
      }
  }








function checkdate() {
  throw new Error('Function not implemented.');
}

