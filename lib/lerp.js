module.exports = function lerp(start, stop, weight) {
	return weight * (stop - start) + start;
}
