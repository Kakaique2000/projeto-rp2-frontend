import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
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

  constructor(
    private route: Router,
    private loginService: HomeLoginService) { }

  ngOnInit(): void {
    this.route.events.pipe(
      filter(e => e instanceof ActivationEnd),
      map(e  => (e as any).snapshot.data)).subscribe(params => {
      this.showSideMenu = params['showSideMenu']
      console.log(params)
    })

  }

  isRecruiter() {
    return this.loginService.loggedUser &&
      this.loginService.loggedUser.role.find(e => e.name == 'ROLE_RECRUITER');
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
