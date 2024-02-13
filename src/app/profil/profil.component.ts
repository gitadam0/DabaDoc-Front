import {Component, OnInit} from '@angular/core';
import {AxiosService} from "../services/axios.service";
import {Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Question} from "../interfaces/Question";
import {AuthService} from "../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  toggleHeartColor(item:Question) {
    item.liked = !item.liked;
  }

  constructor(private axiosService: AxiosService,
              private router: Router,
              private questionsService: QuestionsService,
              private authService: AuthService
  ) {

    console.log( 'window.localStorage.getItem("auth_token")');
    if (window.localStorage.getItem("auth_token") === null || window.localStorage.getItem("auth_token") === undefined) {
      console.log( '!!! user not loged in');
      router.navigate(['/login'])
    }else{
      console.log( '!!! user loged in');

    }
    console.log( window.localStorage.getItem("auth_token"));
    //axiosService.verifyToken();
  }


  items: Question[] = [];
   /*items2 = [
    { id: 1, title: 'toString not working',
      content: 'im using it in **  but its not wokring',
      location: 'string', user: { name: 'User1' }
    },
     { id: 1, title: 'toCHAR not working',
       content: 'im using it in **  but its not wokring',
       location: 'string', user: { name: 'User2' }
     },
   ];*/

  ngOnInit() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.questionsService.getQuestions().subscribe((data:Question[]) => {
      console.log("data:::");
      this.items = data;
      console.log(data);
    }, (error) => {
      console.error('Error fetching questions:', error);

      if (error instanceof HttpErrorResponse && error.status === 401) {
        console.log("token expired");
      } else {
        console.log("errroorrr");
      }

    });
  }
 /* fetchStringFromApi() {
    this.authService.getData().subscribe((data) => {
      console.log("data:::::::");
      //this.items = data;
      console.log(data);
    }, (error) => {
      console.error('Error fetching questions:', error);
    });
  }*/


  addQuestion() {
    this.router.navigate(['/addquestionform']);
    /*this.questionsService.addQuestion(this.newQuestion).subscribe((data:Question[]) => {
      console.log("data:::");
      this.items = data;
      console.log(data);
    }, (error) => {
      console.error('Error posting questions:', error);
    });*/
  }

  goToQuestionDetailsPage(item:Question){
    this.router.navigate(['/questionDetailsPage'],
      { queryParams: { question: JSON.stringify(item) } });

  }

}
