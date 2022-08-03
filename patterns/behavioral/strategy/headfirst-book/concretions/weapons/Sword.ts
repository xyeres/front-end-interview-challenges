import { WeaponBehavior } from "../../interfaces/WeaponBehavhior";

export class Sword implements WeaponBehavior {
  fight(): void {
    console.log('Swings sword *clash!*')
  }
}
