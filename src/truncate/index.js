/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  /* your logic here...*/
if (length > str.length) {
	return str;
}
 var newstr = '';
 var arr = str.split('');
 for (var i=0; i<=arr[length-1]; i++) {
	 newstr += arr[i];
 }
//	newstr += replacer;
	return newstr;
};

export default truncate;
