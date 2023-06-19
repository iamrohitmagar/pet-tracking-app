import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { SummaryComponent } from './summary/summary.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:"summary",component: SummaryComponent , data: {obj: {}} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
