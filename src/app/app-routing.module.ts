import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {ProfilComponent} from "./profil/profil.component";
import {BodyComponent} from "./body/body.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegistreComponent} from "./registre/registre.component";
import {AddQuestionFormComponent} from "./forms/add-question-form/add-question-form.component";
import {QuestionDetailsPageComponent} from "./question-details-page/question-details-page.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'main', component: BodyComponent },
  { path: 'addquestionform', component: AddQuestionFormComponent },
  { path: 'questionDetailsPage', component: QuestionDetailsPageComponent },
  //{ path: '', component: NotFoundComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  /*imports: [
    CommonModule
  ],*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
