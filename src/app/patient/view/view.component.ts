import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';


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
  }

}
