import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PlayerModel} from "./model/PlayerModel";
import {LocalStorageService} from "./local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'MyClickerGame';


  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {  }

  ngOnInit() {
    this.setToken();
  }

  setToken(): void {
    if (!this.localStorageService.getItem("token")) {
      this.http.post<Token>('http://localhost:8080/player/token', {})
        .subscribe(token => {
        this.localStorageService.setItem("token", token.value);
      })
    } else {
      let token = this.localStorageService.getItem("token");
      let headers = new HttpHeaders().set("token", token !== null ? token : "");
      this.http.get<PlayerModel>('http://localhost:8080/player/token', {headers})
        .subscribe(player => {
          this.localStorageService.setItem("eggsInStorage", player.eggsInStorage.toString())
          this.localStorageService.setItem("totalEggsProduced", player.totalEggsProduced.toString())
          this.localStorageService.setItem("eggsClicked", player.eggsClicked.toString())
        })
    }
  }
}

interface Token {
  value: string;
}
