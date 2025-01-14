import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PlayerModel} from "../../model/PlayerModel";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {}

  sendEggsToStorage(): void {
    let eggsInStorage = localStorage.getItem("eggAmount");
    let params = new HttpParams().set("amount", eggsInStorage !== null ? eggsInStorage: "0")
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("token", token !== null ? token : "");
    const options = {
      headers: headers,
      params: params
    }
    this.http.put<PlayerModel>('http://localhost:8080/player/deliver', {}, options)
      .subscribe(player => {
        localStorage.setItem("eggsInStorage", player.eggsInStorage.toString());
        localStorage.setItem("eggAmount", "0");
      })
    localStorage.setItem("eggsInStorage", "0")
  }

}
