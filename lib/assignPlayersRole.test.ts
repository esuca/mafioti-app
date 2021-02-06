import {assignPlayersRole, Player} from "./assignPlayersRole";

describe('do x', () => {
	const players: Player[] = [
		{
			name: "Alex",
			role: "CITIZEN"
		},
		{
			name: "Emy",
			role: "CITIZEN"
		},

		{
			name: "Marius",
			role: "CITIZEN"
		},
		{
			name: "Javi",
			role: "CITIZEN"
		},
		{
			name: "Maria",
			role: "CITIZEN"
		},
		{
			name: "Blanca",
			role: "CITIZEN"
		},
	]

	test('should assign doctor role to one of them', () => {

		const result = assignPlayersRole(players)

		expect(result.some(player => player.role === 'DOCTOR')).toBe(true)
	})

	test('should assign doctor and police role to one of them', () => {
		const result = assignPlayersRole(players)

		expect(result.some(player => player.role === 'DOCTOR')).toBe(true)
		expect(result.some(player => player.role === 'POLICE')).toBe(true)
	})

	test('should assign doctor and police role and assign x killer role', () => {
		const result = assignPlayersRole(players, 3)

		expect(result.some(player => player.role === 'DOCTOR')).toBe(true)
		expect(result.some(player => player.role === 'POLICE')).toBe(true)
		expect(result.filter(player => player.role === 'KILLER').length).toBe(3)
	})
})