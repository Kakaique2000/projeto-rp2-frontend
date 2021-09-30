import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from '../login-home.service';
import { Router } from '@angular/router';
import { NewUser } from './new-user';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
    
    signupForm: FormGroup;
    flag: boolean = true;

    constructor(private formBuilder: FormBuilder,
         private signupService : HomeLoginService,
         private router : Router) {}

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
            ]
        });
    }

    signup(){
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
