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
}
