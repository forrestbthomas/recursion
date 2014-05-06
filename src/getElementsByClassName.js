// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
var doc = document.body;
var classArr = [];

var recursiveFunc = function(node) {
	if (node.classList !== undefined) {
	  if (node.classList.contains(className)) {
	    classArr.push(node)
	  }
	  if (node.hasChildNodes()) {
	    for (var i = 0; i < node.childNodes.length; i++) {
	      recursiveFunc(node.childNodes[i]);
	    }
	  }
	} else {
		if (node.className === className) {
			classArr.push(node);
		}
	}
return classArr;
};
recursiveFunc(doc);
return classArr;
    

};




