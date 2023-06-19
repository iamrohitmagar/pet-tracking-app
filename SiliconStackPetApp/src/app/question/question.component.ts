import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public answerList = [{}];
  $event : Event;
  disabled: Boolean = true;
  petName : String= '';
  petType: string = '';
  petSpending : string = '';
 
  progress: string = "0";
  isServeyCompleted : boolean = false;
  showSubmit : boolean = false;

  constructor(private questionService: QuestionService, private route : Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  nextQuestion() {
    this.currentQuestion++;
    this.currentQuestion === 2  ? this.showSubmit = true : this.showSubmit = false;
  }

  onPetSelect($event:any,option: any){
    if(option['questionNo']===1)
      this.petType = option.text;
    if(option['questionNo']===3)
      this.petSpending = option.text;
    if(this.petType !='' && this.petSpending !='' && this.petName.length>=1){
      this.disabled = false;
    }
    else{
      this.disabled = true;
    }
  }

  submitSurvey(){
    this.route.navigate(['/summary'],{queryParams: {petType: this.petType, petName: this.petName, petSpending: this.petSpending }});
  } 

  previousQuestion() {
    this.currentQuestion--;
    this.currentQuestion < 3 ? this.showSubmit = false : '';
  }
  answer(currentQno: number, option: any) {
    this.answerList.push(option.text);
    if(currentQno === this.questionList.length){
      this.showSubmit = true;
    }
  }
}
