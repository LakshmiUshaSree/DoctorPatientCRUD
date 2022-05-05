import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;

  constructor(public doctorService: DoctorService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      //  id : new FormControl('', [Validators.required]),
        doctorid : new FormControl('', [Validators.required, Validators.maxLength(6),Validators.pattern("^[0-9]{1,6}")]),
        doctorname: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$"),Validators.maxLength(50)]),
       
      });
    }
    
    get f(){
      return this.form.controls;
    }
  
    submit(){
      console.log(this.form.value);
      this.doctorService.create(this.form.value).subscribe(res => {
           console.log('Post created successfully!');
           this.router.navigateByUrl('doctor/index');
           alert("Record Created Successfully!!!")
           window.location.reload();
      })
  }
  }
  
