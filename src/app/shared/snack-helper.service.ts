import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackHelperService {

  constructor(
    private snackBar: MatSnackBar,) { }



    okTransacao(message: string) {
      this.snackBar.open(message, 'ok', {duration: 2000 });
    }

}
