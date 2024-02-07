import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../interfaces/Question";

@Component({
  selector: 'app-question-details-page',
  templateUrl: './question-details-page.component.html',
  styleUrls: ['./question-details-page.component.css']
})
export class QuestionDetailsPageComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Access the query parameters here
      const serializedQuestion = params['question'];
      const question: Question = JSON.parse(serializedQuestion);

      // Use the parameter as needed
      console.log('Received parameter:', question);
      console.log('Received title:', question.title);
      console.log('Received content:', question.content);
      console.log('Received answers:', question.answers);
    });
  }


}

