import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PlayerModel} from "./model/PlayerModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'MyClickerGame';


  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.setToken();
  }

  setToken(): void {
    if (!localStorage.getItem("token")) {
      this.http.post<Token>('http://localhost:8080/player/token', {})
        .subscribe(token => {
        localStorage.setItem("token", token.value);
      })
    } else {
      let token = localStorage.getItem("token");
      let headers = new HttpHeaders().set("token", token !== null ? token : "");
      this.http.get<PlayerModel>('http://localhost:8080/player/token', {headers})
        .subscribe(player => {
          localStorage.setItem("eggsInStorage", player.eggsInStorage.toString())
          localStorage.setItem("totalEggsProduced", player.totalEggsProduced.toString())
          localStorage.setItem("eggsClicked", player.eggsClicked.toString())
        })
    }
  }
}

interface Token {
  value: string;
}
