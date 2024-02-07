import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserDTOModel} from "../models/UserDTO.model";
import {AxiosService} from "../services/axios.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {


  constructor(private router: Router,private axiosService: AxiosService,) {
    console.log( 'window.localStorage.getItem("auth_token")');
    if (window.localStorage.getItem("auth_token") !== null) {
      console.log( '!!! user already loged in');
      router.navigate(['/main'])
    }else{
      console.log( '!!! user not loged in');

    }
  }
  //active:string="login";

  @Output() onSubmitLoginEvent=new EventEmitter<any>();

  login: string = '';
  password: string = '';


  onLoginSubmit() {
    console.log('Login:', this.login);
    console.log('password:', this.password);

    let user:UserDTOModel = {username:this.login,password:this.password}

    this.axiosService.request(
      'post',
      'http://localhost:8082/auth/login',
      user
    ).then((response) => {
      console.log(response);
      this.axiosService.setAuthTokens(response.data.token);
      if( localStorage.getItem("auth_token")!==null){
        console.log(localStorage.getItem("auth_token"));
        this.router.navigate(['/main']);
       localStorage.setItem("name",this.login);
      }
    });


  }



}
