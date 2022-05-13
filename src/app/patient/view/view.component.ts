import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import * as moment from 'moment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: string;
  patientId: string;
  patient: Patient;

  constructor(public patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.patientId= this.route.snapshot.params['patientId'];

    this.patientService.find(this.id,this.patientId).subscribe((data: Patient)=>{
      console.log('data#', data);
      this.patient = data;
    });
    

    checkdate()
        const date = moment(this.patient.Age).format('DD-MM-YYYY');
        console.log(date);
  }

}
function checkdate() {
  throw new Error('Function not implemented.');
}

