import { Character } from "../Character";
import { Sword } from "../weapons/Sword";

export class Knight extends Character {
  protected _weaponBehavior = new Sword();

}