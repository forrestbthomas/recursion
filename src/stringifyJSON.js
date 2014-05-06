// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
// your code goes here
	var narr = [];
	var nobj;
	if (typeof obj === 'string') obj = '"' + obj + '"';
	if (typeof obj === 'number') obj += "";
	if (typeof obj === 'boolean') obj += '';
	if (obj === null) return obj += '';
	if (Array.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			narr.push(stringifyJSON(obj[i]));
		}
		return narr = "[" + narr + "]";
	}
	if (typeof obj === 'object') {
		var objLength = Object.getOwnPropertyNames(obj).length;
		if (objLength > 0) {
			for (var key in obj) {
				if (obj[key] === undefined || typeof obj[key] === 'function') {
					delete obj[key];
				}
			}
			if (objLength === 1) {
				for (var key in obj) {
					nobj = stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
				}
				return nobj = '{' + nobj + '}';
			} else {
				for (var key in obj) {
					nobj += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
				}
				console.log(nobj);
				nobj = nobj.slice(9, nobj.length - 1);
				return nobj = '{' + nobj + '}';
			}
		} else {
			return '{}';
		}
	}

	return obj;

};