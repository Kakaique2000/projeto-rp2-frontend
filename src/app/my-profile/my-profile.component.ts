import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as AppValidators from "src/app/shared/validators";
import { User } from '../login-home/user.model';
import { UserService } from '../shared/services/user.service';
import { HomeLoginService } from './../login-home/login-home.service';
import { AvatarModalComponent } from './avatar-modal/avatar-modal.component';



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[]  = []


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private homeService: HomeLoginService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }


  readonly namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  readonly phonePattern = /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/;


  @Input()
  user: User = this.route.snapshot.data.user;

  myInfosForm: FormGroup
  activeElement: HTMLElement | null;
  isSaving = false;

  getProfilePic() {
    return (this.user.profilePic && this.user.profilePic !== '') ?
      this.user.profilePic :
      'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
  }

  mensagemTransacao(message: string) {
    this.snackBar.open(message, 'ok', {duration: 2000 });
  }

  openProfileDialog() {
    const dialog = this.dialog.open(AvatarModalComponent);
    const modal = dialog.componentInstance;
    modal.profilePic = this.user.profilePic;
    modal.click.subscribe({
      next: () => {
        modal.isSaving = true;
        this.userService.patchUser(this.user.id, { profilePic: modal.formControl.value || '' }).subscribe({
          next: () => {
            modal.isSaving = false;
            dialog.close();
            this.mensagemTransacao('foto salva com sucesso');
          },
          error: () => {
            this.mensagemTransacao('ops, ocorreu um erro ao salvar');
          }
        });
      }
    })
  }

  getRoles(): RoleDescription[] {
    return this.user.roles.map(
      e => {
        switch (e.name.toLocaleLowerCase()) {
          case 'role_recruiter':
            return { label: 'Recrutador', infos: 'permite cadastrar empresas e vagas' };
          case 'role_user':
            return { label: 'Usuário', infos: 'permite se cadastrar em vagas e criar cursos' };
          case 'role_admin':
            return { label: 'Admin', infos: 'permite administrar todos os aspectos do sistema' };
        }
        return ({ label: 'Usuário', infos: 'permite se cadastrar em vagas e criar cursos' })
      }
    )
  }


  get emailControl() {
    return this.myInfosForm.get('email') as FormControl;
  }

  get phoneControl() {
    return this.myInfosForm.get('phone') as FormControl;
  }

  get nameControl() {
    return this.myInfosForm.get('name') as FormControl;
  }

  get cpfCnpjControl() {
    return this.myInfosForm.get('cpfcnpj') as FormControl;
  }

  saveInfos() {
    this.isSaving = true;
    this.userService.patchUser(this.user.id, this.myInfosForm.value).subscribe({
      next: _e => {
        this.isSaving = false;
        this.mensagemTransacao('informações salvas com sucesso');
      },
      error: () => {
        this.isSaving = false;
        this.mensagemTransacao('ops, ocorreu um erro ao salvar as informações');
      }
    })
  }

  ngOnInit(): void {

    this.myInfosForm = this.fb.group({
      name: [
        this!.user.name,
        [
          Validators.pattern(this.namePattern),
          Validators.required,
        ]],
      email: [
        this!.user.email,
        [
          Validators.email,
          Validators.required,
        ],
      ],
      phone: [
        this!.user.phone,
        [
          Validators.pattern(this.phonePattern),
          Validators.required,
        ]
      ],
      cpfcnpj: [
        this!.user.cpf,
        [
          AppValidators.cpfCnpjValidator,
          Validators.required,
        ]
      ],
    })

    this.subscriptions.push(this.homeService.loggedUser$.subscribe({
      next: user => this.user = user
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }


}

export interface RoleDescription {
  label: string;
  infos: string;
}