import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeLoginService } from '../login-home.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;
  isLogingIn: boolean;

    constructor(private formBuilder: FormBuilder,
                private loginService : HomeLoginService,
                private router : Router) {  }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        console.log(this.loginForm.get('password'));

    }

    login() {
        this.isLogingIn = true;
        const email = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.loginService.authenticate(email, password)
        .subscribe(() => {
            this.isLogingIn = false;
            this.router.navigateByUrl('profile');
          },
          erro => {
            alert('email/senha errada ;(');
            this.isLogingIn = false;
            this.loginForm.reset();
        })


    }


    register(){

    }

}
