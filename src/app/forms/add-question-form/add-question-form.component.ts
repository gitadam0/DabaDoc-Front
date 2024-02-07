import { Component } from '@angular/core';
import {QuestionPost} from "../../interfaces/QuestionPost";
import {AxiosService} from "../../services/axios.service";
import {Router} from "@angular/router";
import {QuestionsService} from "../../services/questions.service";
import {AuthService} from "../../services/auth.service";
import {Question} from "../../interfaces/Question";

@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {
  constructor(private axiosService: AxiosService,
              private router: Router,
              private questionsService: QuestionsService,
              private authService: AuthService
  ) {
    console.log( 'window.localStorage.getItem("auth_token")');
    if (window.localStorage.getItem("auth_token") === null) {
      console.log( '!!! user not loged in');
      router.navigate(['/login'])
    }else{
      console.log( '!!! user loged in');

    }
    console.log( window.localStorage.getItem("auth_token"));
  }

  newQuestion: QuestionPost = {
    id: 0,
    title: 'Your Title',
    content: 'Your content goes here',
    location: 'Your Location',
    user: {
      username: "2"
    }
  };
  addQuestion() {
    this.questionsService.addQuestion(this.newQuestion).subscribe((data:Question[]) => {
      this.router.navigate(['/main'])
    }, (error) => {
      console.error('Error posting questions:', error);
    });
  }
}
