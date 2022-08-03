import { WeaponBehavior } from "../interfaces/WeaponBehavhior";

export class Crown implements WeaponBehavior {
  fight(): void {
    console.log("Crushing crown rule deports you to labor camp")
  }
}