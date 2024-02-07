import {Injectable} from '@angular/core';
import axios from "axios";
import {UserDTOModel} from "../models/UserDTO.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../interfaces/Question";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient,
  ) {
  }


  private apiUrl = 'http://localhost:8082/questions';

  getQuestions(): Observable<Question[]> {

    return this.http.get<Question[]>(this.apiUrl,
      /*{headers: {
        Authorization: 'Bearer ' + localStorage.getItem("auth_token"),
      }}*/
    );
  }


  /*addCategory(category: any): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }
  deleteCategory(id:Number): Observable<any> {
    return this.http.delete(this.apiUrl+"/"+id);
  }
  editCategory(id:Number,object:any): Observable<any> {
    return this.http.put(this.apiUrl+"/"+id,object);
  }*/
}
