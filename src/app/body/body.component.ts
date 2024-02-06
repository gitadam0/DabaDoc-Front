import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {AuthService} from "../services/auth.service";
import {AxiosService} from "../services/axios.service";

import {UserDTOModel} from "../models/UserDTO.model"
import {Router} from "@angular/router";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})



export class BodyComponent  {
  //componemtToShow:string = "login";
  responseData: string="";

  constructor(private axiosService: AxiosService,
              private router: Router,
              //private dataService: AuthService
  ) {

  }

  ngOnInit(): void {
   // this.getData();
  }


 /* getData(): void {
    this.dataService.getData({ responseType: 'text' }).subscribe(
      (data) => {
        this.responseData = data; // Assign the plain string directly
        console.log("good data");
        console.log('Response Data:', data);
      },
      (error) => {
        console.log("bad data");
        console.error('Error fetching data:', error);
      }
    );
  }*/




  onRegiistreSubmit(event: any) {
    console.log('Registre:', event.username);
    console.log('Registre:', event.password);

    let user:UserDTOModel = {username:event.username,password:event.password}

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
