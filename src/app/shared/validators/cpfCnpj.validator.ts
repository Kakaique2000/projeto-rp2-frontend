import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { cnpj, cpf } from "cpf-cnpj-validator";

export const cpfCnpjValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (cpf.isValid(control.value)) return null;
    if (cnpj.isValid(control.value)) return null;
    return { cpfCnpj: true };
};

