import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  ngOnInit() {

    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("Token", token !== null ? token : "");
    this.http.get<PlayerModel>('http://localhost:8080/player', {headers})
      .subscribe(p => {
        this.player.next(p)
        console.log(p)
      });

  }
}
