import { WeaponBehavior } from "./interfaces/WeaponBehavhior";

export class Character {
  private _name: string = "";
  protected _weaponBehavior: WeaponBehavior | null = null;

  constructor(name: string) {
    this._name = name;
  }

  sayName(): void {
    console.log(`[${this.name}] "My name is ${this.name}"`);
  }

  changeName(newName: string): void {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  performFight(): void {
    this._weaponBehavior?.fight();
  }
}


