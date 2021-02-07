// make it work make it right make it fast
import {shuffle} from "./utils/shuffle";

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