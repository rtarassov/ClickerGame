import {EggBoosterModel} from "./EggBoosterModel";

export interface PlayerModel {
  name: string;
  eggsClicked: number;
  totalEggsProduced: number;
  eggsInStorage: number;
  playerToken: string;
  eggBoostersObtained: EggBoosterModel[];
}
