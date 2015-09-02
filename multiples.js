/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */

 n = 1000;

exports.sumOfAMultiple = function( n ) {
  var sum = 0 ;
  var i = 0;
 for(i = 0; i < n; i++) {
 	if(i % 3 === 0) {
 		sum = sum + i;
 	} else if (i % 5 === 0) {
 		sum = sum + i;
	}
 }
  return sum;
};
