// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') obj = "'" + obj + "'";
  if (typeof obj === 'number') obj += '';
  if (typeof obj === 'boolean') obj += '';
  if (typeof obj === 'function') obj = undefined;
  if (Array.isArray(obj)) {
  	for (var i = 0; i < obj.length; i++) {
  		stringifyJSON(obj[i]);
  	}
  	return obj = "'[" + obj + "]'";
  };
  if (typeof obj === 'object') {
  	for (var key in obj) {
  		stringifyJSON(obj[key])
  	}
  }
  
};