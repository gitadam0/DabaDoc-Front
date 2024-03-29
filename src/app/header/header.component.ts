import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public appName: string = 'DABADOC';

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  logout() {
    console.log("logout func :");
    window.localStorage.removeItem("auth_token");
    this.router.navigate(['/login'])
  }
}
