import { Component, OnInit,ViewChild,ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  userName : string = '';
  disabled : boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }

 modelChanged(userName){
  userName.length >= 1 ? this.disabled = false : this.disabled = true;
 }

  startSurvey(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
