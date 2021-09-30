import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from '../login-home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl :'./new-password.component.html'
})
export class NewPasswordComponent implements OnInit{
    
    novaSenhaForm: FormGroup;

    flag: boolean = true;

    constructor(private formBuilder: FormBuilder,
                private loginService : HomeLoginService,
                private activateRoute : ActivatedRoute,) {  }

    ngOnInit(): void {
        this.novaSenhaForm = this.formBuilder.group({
            senha:['', Validators.required],
            senhaConfirma:['', Validators.required]
        });

    }

    changePassword() {
        const senha = this.novaSenhaForm.get('senha').value;
        const senhaConfirma = this.novaSenhaForm.get('senhaConfirma').value;

        this.activateRoute.queryParams.subscribe((res) => {
            const newToken = res.token;
            this.loginService.novaSenha(newToken,senha, senhaConfirma)
        .subscribe((res) => {
            alert(res);
            this.flag =false;
        },
        erro => {
            alert(erro);
            
        })
        },
        erro => {
            alert(erro);
            
        })
    
        
        
    }
    

}