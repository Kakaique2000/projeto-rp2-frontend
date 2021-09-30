import { Component, OnInit } from '@angular/core';
import { Registrations } from './registrations.model';
import { RegistrationsService } from './registrations.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit { 

  Object = Object;
  listRegistrations : Registrations[] = []

  constructor(private registrationsService: RegistrationsService) {  }

  ngOnInit() { 
    this.getApplyJobs()  
  }

  getApplyJobs() {
    this.registrationsService.getAllRegister()
        .subscribe((res) => {
          this.listRegistrations = res
          console.log(this.listRegistrations)          
        },
        erro => {
            console.log(erro);
        })
  }

}
