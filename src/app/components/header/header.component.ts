import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PlayerModel} from "../../model/PlayerModel";
import {LocalStorageService} from "../../local-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {  }

  eggsInStorage: number | undefined;
  ngOnInit(): void {
    this.eggsInStorage = Number(this.localStorageService.getItem("eggsInStorage") || 0)
  }

  sendEggsToStorage(): void {
    let eggsInStorage = this.localStorageService.getItem("eggAmount");
    let params = new HttpParams().set("amount", eggsInStorage !== null ? eggsInStorage: "0")
    let token = this.localStorageService.getItem("token");
    let headers = new HttpHeaders().set("token", token !== null ? token : "");
    const options = {
      headers: headers,
      params: params
    }
    this.http.put<PlayerModel>('http://localhost:8080/player/deliver', {}, options)
      .subscribe(player => {
        this.localStorageService.setItem("eggsInStorage", player.eggsInStorage.toString());
        this.localStorageService.setItem("eggAmount", "0");
      })
    this.localStorageService.setItem("eggsInStorage", "0")
  }

}
