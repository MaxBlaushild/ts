interface Pettable {
	numberOfPets: number;
	isAGoodBoy: boolean;
}

function pet(animal: Pettable) {
	animal.numberOfPets++;
	animal.isAGoodBoy = true;
}