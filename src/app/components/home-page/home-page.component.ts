import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PlayerModel} from "../../model/PlayerModel";
import {LocalStorageService} from "../../local-storage.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  player: BehaviorSubject<PlayerModel | null> = new BehaviorSubject<PlayerModel | null>(null);
  myEggs: number | undefined;

  ngOnInit() {
    this.myEggs = Number(this.localStorageService.getItem("eggAmount") || 0)
  }
}
