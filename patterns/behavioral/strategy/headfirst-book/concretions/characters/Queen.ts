import { Character } from "../../Character";
import { Crown } from "../weapons/Crown";

export class Queen extends Character {
  protected _weaponBehavior = new Crown();

  knight(character: Character): void {
    const newName = `Sir. ${character.name}`;

    console.log(`[${this.name}] "I dub thee ${newName}!"`);

    character.changeName(newName);
  }
}