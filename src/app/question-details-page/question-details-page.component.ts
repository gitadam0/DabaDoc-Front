import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../interfaces/Question";
import {QuestionsService} from "../services/questions.service";
import {AnswerService} from "../services/answer.service";
import {Answer} from "../interfaces/Answer";

@Component({
  selector: 'app-question-details-page',
  templateUrl: './question-details-page.component.html',
  styleUrls: ['./question-details-page.component.css']
})
export class QuestionDetailsPageComponent implements OnInit {
  question: Question = {} as Question;
  commentText: string = '';

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private answerService: AnswerService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Access the query parameters here
      const serializedQuestion = params['question'];
       this.question = JSON.parse(serializedQuestion);


        this.questionsService.getQuestionByID(this.question.id).subscribe((data:Question) => {
          console.log("data:");
          this.question = data;
          console.log(data);
        }, (error) => {
          console.error('Error fetching questions:', error);
        });

    });
  }


  AddAnswer() {

    if (this.commentText === null || this.commentText === undefined || this.commentText.trim() === '') {
      console.log("comment shouldnt be empty")
    } else {

      let answer: Answer =  {
        id: 0,
        answer: this.commentText,
        question_id: this.question.id.toString(),
        user_id: window.localStorage.getItem("name")!
      };
      console.log("commment : "+this.commentText)
      this.answerService.addAnswer(answer).subscribe((data:Answer) => {
        console.log("added answer:");
        //this.question = data;
        console.log(data);
      }, (error) => {
        console.error('Error fetching questions:', error);
      });
      console.log("Added Answer");

    }


  }

}

