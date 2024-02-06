import { Component } from '@angular/core';
import {AxiosService} from "../services/axios.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private axiosService: AxiosService,
              private router: Router,
              //private dataService: AuthService
  ) {
    console.log( 'window.localStorage.getItem("auth_token")');
    if (window.localStorage.getItem("auth_token") === null) {
      console.log( '!!! user not loged in');
    }else{
      console.log( '!!! user loged in');
    }
    console.log( window.localStorage.getItem("auth_token"));
  }

}
