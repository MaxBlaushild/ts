function sayPointsScored(points): void {
	let lebronJamesMutiplier = 1000;
	let pointsScored = points * lebronJamesMutiplier;
	let proclamation = `Lebron James scored ${pointsScored} points!`;
	console.log(proclamation);
}

let pointsScored = 9000;

sayPointsScored(pointsScored);