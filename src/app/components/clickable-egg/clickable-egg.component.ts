import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-clickable-egg',
  templateUrl: './clickable-egg.component.html',
  styleUrls: ['./clickable-egg.component.scss']
})
export class ClickableEggComponent implements OnInit {
  eggAmount: number = Number(localStorage.getItem("eggAmount") ?? 0);
  eggMultiplier: number = 1;
  @Output() eggDeliverer = new EventEmitter<number>();

  ngOnInit(): void {
    this.eggAmount = Number(localStorage.getItem("eggsInStorage"));
    this.sendEggsToHomePage()
  }

  ngOnChanges(): void {
    this.eggAmount = Number(localStorage.getItem("eggAmount"));
  }

  sendEggsToHomePage(){
    this.eggDeliverer.emit(this.eggAmount);
    localStorage.setItem("eggAmount", String(this.eggAmount));
  }

  clickedEgg() {
    this.eggAmount += this.eggMultiplier;
  }
}
