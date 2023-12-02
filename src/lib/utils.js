const colors = ["red", "green", "blue", "teal", "cyan", "purple"];

export function randomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
