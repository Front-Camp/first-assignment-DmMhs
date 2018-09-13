/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  /* your logic here...*/
 var newarr = [];
 for (var i=0; i<arr.length; i++) {
	for (var j=0; j<arr[i].length; j++) {
		newarr.push(arr[j]);
	}
 }
	return newarr;
};

export default getFlags;

