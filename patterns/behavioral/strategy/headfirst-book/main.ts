import { Knight } from "./concretions/characters/Knight";
import { Queen } from "./concretions/characters/Queen";

const tony = new Knight("Tony");
const elizabeth = new Queen("Elizabeth");

tony.sayName()
tony.performFight();

elizabeth.knight(tony)

tony.performFight()
elizabeth.performFight()
