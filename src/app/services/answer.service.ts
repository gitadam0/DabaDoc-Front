import {Injectable} from '@angular/core';
import axios from "axios";
import {UserDTOModel} from "../models/UserDTO.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../interfaces/Question";
import {AuthService} from "./auth.service";
import {QuestionPost} from "../interfaces/QuestionPost";
import {Answer} from "../interfaces/Answer";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient,
  ) {
  }


  private apiUrl = 'http://localhost:8082/answers';


  addAnswer(answer :Answer): Observable<Answer> {
    return this.http.post<Answer>(
      this.apiUrl,
      answer,
      {headers: {
        Authorization: 'Bearer ' + localStorage.getItem("auth_token"),
      }}
    );
  }




}
