import { Injectable } from '@angular/core';
import axios from "axios";
import {UserDTOModel} from "../models/UserDTO.model";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL="http://localhost:8082";
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthTokens() {
    return window.localStorage.getItem("auth_token");
  }
  setAuthTokens(token:string |null) {
    if (token!==null) {
      window.localStorage.setItem("auth_token", token);
    }else {
      window.localStorage.removeItem("auth_token");
    }
  }

  verifyToken(): Promise<boolean> {
    console.log('verifyToken');
    let token: string | null = this.getAuthTokens();

    if (token===null) {
      console.log('token is :'+token);
      return Promise.resolve(false);
    }else {

      return this.requestToVerify('POST', '/verify-token', token!)
        .then(response => {
          // Token is valid, consider the user as logged in
          return true;
        })
        .catch(error => {
          // Token is invalid or expired, consider the user not logged in
          console.error('Token verification failed:', error);
          return false;
        });

    }

  }


  request(method: string, url: string, data: UserDTOModel) : Promise<any> {
    let headers = {};
    if (this.getAuthTokens()!==null) {
      headers = {"Authorization": "Bearer " +this.getAuthTokens() }
    }
    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }
  requestToVerify(method: string, url: string, token: string) : Promise<any> {
    let headers = {};
    if (this.getAuthTokens()!==null) {
      headers = {"Authorization": "Bearer " +this.getAuthTokens() }
    }
    return axios({
      method: method,
      url: url,
      data: token,
      headers: headers
    });
  }
}
