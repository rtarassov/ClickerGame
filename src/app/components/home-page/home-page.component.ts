import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {PlayerModel} from "../../model/PlayerModel";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  player: BehaviorSubject<PlayerModel | null> = new BehaviorSubject<PlayerModel | null>(null);
  myEggs: number | undefined;

  receiveEggs($event: number | undefined) {
    this.myEggs = $event;
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {}
}
