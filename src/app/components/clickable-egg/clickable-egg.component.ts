import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-clickable-egg',
  templateUrl: './clickable-egg.component.html',
  styleUrls: ['./clickable-egg.component.scss']
})
export class ClickableEggComponent implements OnInit {
  eggAmount: number = 0;
  eggAdder: number = 1;
  @Output() eggDeliverer = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.eggAmount = Number(localStorage.getItem("eggsInStorage"));
    this.sendEggsToHomePage()
  }

  sendEggsToHomePage(){
    this.eggDeliverer.emit(this.eggAmount);
    localStorage.setItem("eggsInStorage", String(this.eggAmount));
  }

  clickedEgg() {
    this.eggAmount += this.eggAdder;
    console.log(this.eggAmount);
  };
}
