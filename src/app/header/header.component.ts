import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public appName: string = 'DABADOC';

  constructor() { }

  ngOnInit(): void {
  }
  logout() {
    console.log("logout func :");
    window.localStorage.removeItem("auth_token");
  }
}
