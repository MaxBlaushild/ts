function pet(animal) {
    animal.numberOfPets++;
    animal.isAGoodBoy = true;
}
var fluffy = {
    name: 'fluffy',
    numberOfPets: 3,
    isAGoodBoy: false,
    legs: 4,
    wearingDiaper: true
};
var stray = {
    numberOfPets: 0,
    isAGoodBoy: true,
    legs: 3
};
var dumbo = {
    name: 'dumbo',
    numberOfPets: 9000,
    peanuts: [
        { numberOfNuts: 2 },
        { numberOfNuts: 1.5 },
        { numberOfNuts: 1 }
    ],
    legs: 4,
    trunk: 'long',
    isAGoodBoy: true,
    toot: function () { return console.log('TOOOOOT'); }
};
pet(fluffy);
pet(stray);
pet(dumbo);
