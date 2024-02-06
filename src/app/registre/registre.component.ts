import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserDTOModel} from "../models/UserDTO.model";
import {AxiosService} from "../services/axios.service";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  constructor(private router: Router,private axiosService: AxiosService) {

  }
  @Output() onSubmitRegistreEvent=new EventEmitter<any>();
  login: string = '';
  password: string = '';
 /* onSubmitRegistre() {
    this.onSubmitRegistreEvent.emit(
      {username: this.login, password: this.password}
    );
  }*/
  onRegiistreSubmit() {
    console.log('Registre:', this.login);
    console.log('Registre:', this.password);

    let user:UserDTOModel = {username:this.login,password:this.password}

    this.axiosService.request(
      'post',
      'http://localhost:8082/auth/register',
      user
    ).then((response) => {
      console.log(response);
      //this.axiosService.setAuthTokens(response.data.token);
    });
  }


}
