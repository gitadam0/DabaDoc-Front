import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../interfaces/Question";

@Component({
  selector: 'app-question-details-page',
  templateUrl: './question-details-page.component.html',
  styleUrls: ['./question-details-page.component.css']
})
export class QuestionDetailsPageComponent {
  question: Question = {} as Question;
  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Access the query parameters here
      const serializedQuestion = params['question'];
       this.question = JSON.parse(serializedQuestion);

      // Use the parameter as needed
      console.log('Received parameter:', this.question);
      console.log('Received title:', this.question.title);
      console.log('Received content:', this.question.content);
      console.log('Received answers:', this.question.answers);
    });
  }


}

