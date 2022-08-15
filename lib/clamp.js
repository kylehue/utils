module.exports = function clamp(n, min, max) {
	let val = n < min ? min : n;
	val = val > max ? max : val;
	return val;
}
