const _ids = [];
let _lengthAuto;

module.exports = function uid(length) {
	length = length || 16;
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let id = "";

	function generateId() {
		id = "";
		let len = _lengthAuto || length;
		for (var i = 0; i < len; i++) {
			id += chars[Math.floor(Math.random() * chars.length)];
		}
	}

	generateId();

	let start = Date.now();
	while (_ids.includes(id)) {
		if (Date.now() - start > 20) {
			_lengthAuto = !_lengthAuto ? length + 1 : _lengthAuto + 1;
		}
		generateId();
	}

	_ids.push(id);
	return id;
}
