export function shuffle(arr: any[]) {
	const copy = [...arr]
	let oldElement;
	for (let i = copy.length - 1; i > 0; i--) {
		let rand = Math.floor(Math.random() * (i + 1));
		oldElement = copy[i];
		copy[i] = copy[rand];
		copy[rand] = oldElement;
	}
	return copy;
}
