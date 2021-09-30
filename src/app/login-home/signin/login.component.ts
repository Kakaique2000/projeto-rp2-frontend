import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from '../login-home.service';
import { IUsuario } from 'src/app/home/search-card/search-params/search-params.models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    
    loginForm: FormGroup;

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
        
        const email = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.loginService.authenticate(email, password)
        .subscribe(() => {
            this.router.navigateByUrl('home');
        },
        erro => {
            alert('email/senha errada ;(');
            this.loginForm.reset();
        })
        
        
    }
    

    register(){
        
    }

}