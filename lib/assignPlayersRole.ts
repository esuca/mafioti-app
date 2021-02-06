// make it work make it right make it fast

type PlayerRole = 'CITIZEN' | 'DOCTOR' | 'POLICE' | 'KILLER'
export type Player = { name: string, role: PlayerRole }

export function assignPlayersRole(players: Player[], killersQuantity: number = 3) {

	const newPlayers = shuffle(players)
	newPlayers[0].role = 'DOCTOR'
	newPlayers[1].role = 'POLICE'

	for (let i = 0; i < killersQuantity; i++) {
		const index = i + 2
		newPlayers[index].role = 'KILLER'
	}

	return newPlayers
}

function shuffle(array: any[]) {
	let currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
