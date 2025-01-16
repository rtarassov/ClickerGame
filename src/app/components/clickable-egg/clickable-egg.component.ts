import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../local-storage.service";

@Component({
  selector: 'app-clickable-egg',
  templateUrl: './clickable-egg.component.html',
  styleUrls: ['./clickable-egg.component.scss']
})
export class ClickableEggComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  eggAmount: number = Number(this.localStorageService.getItem("eggAmount") || 0);
  eggMultiplier: number = 1;

  ngOnInit(): void {
    this.eggAmount = Number(this.localStorageService.getItem("eggsInStorage") || 0);
  }

  ngOnChanges(): void {
    this.eggAmount = Number(this.localStorageService.getItem("eggAmount") || 0);
  }

  clickedEgg() {
    let eggs = Number(this.localStorageService.getItem("eggAmount") || 0)
    eggs += this.eggMultiplier;
    this.localStorageService.setItem("eggAmount", eggs.toString())
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'eggAmount',
      newValue: eggs.toString(),
      oldValue: (eggs - this.eggMultiplier).toString(),
      storageArea: localStorage
    }));
  }
}
