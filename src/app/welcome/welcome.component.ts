import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor() {
    console.log(" logout has been clicked if this is null :");
    console.log(window.localStorage.getItem("auth_token"));
    if (window.localStorage.getItem("auth_token") === null) {
      window.location.href = "/login";
    }
  }
  ngOnInit(): void {


  }

}
