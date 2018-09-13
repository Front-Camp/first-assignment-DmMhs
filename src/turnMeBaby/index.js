/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
	if (typeof(str) !=== 'string') {
		throw new Error;
	}
    var res = '';
	var arr = str.split('');
    for (var i=arr.length-1; i>=0; i--) {
	res += 	arr[i];
	}
	return res;
};

export default turnMeBaby;
