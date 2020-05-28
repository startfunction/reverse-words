const reverseWords = (str: String) => str.split( ' ' ).reduce( (revStr: Array<String>, word: String) => [ word, ...revStr ], [] ).join( ' ' );
export default reverseWords;
