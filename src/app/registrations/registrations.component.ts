import { Component, OnInit } from '@angular/core';
import { JobApplicationDto } from '../shared/models/job-application.model';
import { RegistrationsService } from './registrations.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  Object = Object;
  listRegistrations : JobApplicationDto[] = []

  constructor(private registrationsService: RegistrationsService) {  }

  ngOnInit() {
    this.getApplyJobs()
  }

  getApprovalState(app: JobApplicationDto) {
    switch (app.approved) {
      case null:
        return 'em análise';
      case true:
        return 'parabéns, voce foi selecionado para o processo seletivo';
      case false:
        return 'desculpe, mas esta vaga foi preenchida';
    }

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
