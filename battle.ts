class Warrior {
  private wearingUnderwear: boolean;
  public weapon: Weapon;
  public health: number;
  private fightId: number;
  publics fullName: string;
  constructor(fullName: number) {
    this.fullName = fullName;
    this.health = 100;
    this.wearingUnderwear = true;
  }

  fight(target: Warrior) {
    this.fightId = setTimeout(this.weapon.secondsBetweenSwings, () => {
      this.weapon.swing(target);
    });
  }
}

class Sword {
  public shiny: boolean;
  public sharp: boolean;
  public damage: number;
  public secondsBetweenSwings: number;
  constructor() {
    this.shiny = true;
    this.sharp = true;
    this.damage = 10;
    this.secondsBetweenSwings = 5;
  }

  swing(target: Warrior) {
    target.health -= this.damage;
    console.log(`${target.fullName} is down to ${target.health} health.`);
  }
}

class Mace {
  public pointy: boolean;
  public numberOfPoints: number;
  public damage: number;
  constructor() {
    this.pointy = true;
    this.numberOfPoints = 12;
    this.damage = 30;
  }
}

interface Weapon {
  damage: number;
  secondsBetweenSwings: number;
  swing(target: Warrior): void;
}

let leeroy = new Warrior('Leeroy Jenkins');
let leeroy.weapon = new Sword();

let lebron = new Warrior('Lebron James');
let lebron.weapon = new Mace();

leeroy.wearingUnderwear = false;

lebron.fight(leeroy);
leeroy.fight(lebron);
