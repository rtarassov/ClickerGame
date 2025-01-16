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
  eggsInStorage: number | undefined;

  private storageListener: ((event: StorageEvent) => void) | null = null;

  ngOnInit() {
    this.updateEggs()
    this.storageListener = this.onStorageChange.bind(this);
    window.addEventListener('storage', this.storageListener);
  }

  private updateEggs() {
    this.myEggs = Number(this.localStorageService.getItem("eggAmount") || 0)
    this.eggsInStorage = Number(this.localStorageService.getItem("eggsInStorage") || 0)
  }

  private onStorageChange(event: StorageEvent): void {
    if (event.key === 'eggAmount') {
      this.updateEggs();
    }
  }
}
