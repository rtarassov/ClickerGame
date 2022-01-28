import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  myEggs: number | undefined;

  receiveEggs($event: number | undefined) {
    this.myEggs = $event;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
