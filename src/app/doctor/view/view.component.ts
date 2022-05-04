import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: string;
  doctorId: string;
  doctor: Doctor;

  constructor(public doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doctorId= this.route.snapshot.params['employeeId'];

    this.doctorService.find(this.id,this.doctorId).subscribe((data: Doctor)=>{
      console.log('data#', data);
      this.doctor = data;
    });
  }

}
