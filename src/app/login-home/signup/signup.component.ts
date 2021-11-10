import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeLoginService } from '../login-home.service';
import { NewUser } from './new-user';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  flag: boolean = true;

  readonly states = [
    [ 'AC', 'Acre' ],
    [ 'AL', 'Alagoas' ],
    [ 'AP', 'Amapá' ],
    [ 'AM', 'Amazonas' ],
    [ 'BA', 'Bahia' ],
    [ 'CE', 'Ceará' ],
    [ 'DF', 'Distrito Federal' ],
    [ 'ES', 'Espírito Santo' ],
    [ 'GO', 'Goías' ],
    [ 'MA', 'Maranhão' ],
    [ 'MT', 'Mato Grosso' ],
    [ 'MS', 'Mato Grosso do Sul' ],
    [ 'MG', 'Minas Gerais' ],
    [ 'PA', 'Pará' ],
    [ 'PB', 'Paraíba' ],
    [ 'PR', 'Paraná' ],
    [ 'PE', 'Pernambuco' ],
    [ 'PI', 'Piauí' ],
    [ 'RJ', 'Rio de Janeiro' ],
    [ 'RN', 'Rio Grande do Norte' ],
    [ 'RS', 'Rio Grande do Sul' ],
    [ 'RO', 'Rondônia' ],
    [ 'RR', 'Roraíma' ],
    [ 'SC', 'Santa Catarina' ],
    [ 'SP', 'São Paulo' ],
    [ 'SE', 'Sergipe' ],
    [ 'TO', 'Tocantins' ],
  ]

  constructor(private formBuilder: FormBuilder,
    private signupService: HomeLoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70)
        ]
      ],
      lastName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      cpf: ['',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      recruiter: ['', Validators.required],
      password: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(14)
        ]
      ],
      city: ['',
        [
          Validators.required
        ],
      ],
      state: ['',
        [
          Validators.required
        ],
      ],
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser)
      .subscribe(() => {
        this.flag = false;
      },
        erro => {
          console.log(erro);
          this.signupForm.reset();
        })
  }

}
