import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from '../login-home.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loginService: HomeLoginService,
                private router: Router) {  }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [null, Validators.required]
        });

    }

    sendEmail() {
        const email = this.loginForm.get('email').value;

        this.loginService.sendEmail(email)
        .subscribe((res) => {
            alert(res);
        },
        erro => {
            alert(erro);
            this.loginForm.reset();
        });

    }

    login() {

    }

}
