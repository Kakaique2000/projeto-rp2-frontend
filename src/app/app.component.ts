import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSpinner } from '@angular/material/progress-spinner';
import { ActivationEnd, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { HomeLoginService } from './login-home/login-home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'projeto-emprego-frontend';
  sideMenuOpened = false;
  showSideMenu;

  loadingDialog: MatDialogRef<MatSpinner>;
  loadingTimeout: any;

  constructor(
    private router: Router,
    private loginService: HomeLoginService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      map(e  => (e as any).snapshot.data)).subscribe(params => {
      this.showSideMenu = params['showSideMenu']
      console.log(params)
    })

    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loadingTimeout = setTimeout(() => {
            this.showLoading();
          }, 100);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          clearTimeout(this.loadingTimeout)
          this.hideLoading();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  showLoading() {
    this.loadingDialog = this.dialog.open(MatSpinner, {
      disableClose: true
    })
    this.loadingDialog.componentInstance.diameter = 75;
  }

  hideLoading() {
    this.loadingDialog?.close();
  }

  isRecruiter$() {
    return this.loginService.loggedUser$.pipe(
      map(
        e => e?.roles?.find(role => role.name === 'ROLE_RECRUITER')
      )
    )
  }

  clickLogout() {
    this.loginService.logout();
    this.sideMenuOpened = false;
  }


  get menuIcone() {
    return (this.sideMenuOpened && 'menu_open') || 'menu'
  }

  clickMenu() {
    this.sideMenuOpened = !this.sideMenuOpened
  }


}
