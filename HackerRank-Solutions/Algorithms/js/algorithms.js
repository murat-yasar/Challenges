/* Simple Array Sum
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */
function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach(e => sum += e);
  return sum;
}


/* Compare the Triplets
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(alice, bob) {
  let a=0, b=0;
  
  for (let i=0; i<3; i++)
      (alice[i]>bob[i])? a++: (alice[i]<bob[i])? b++: null;
  
  return [a,b];
}

/* A Very Big Sum
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
  let sum=0;
  
  ar.forEach(e => sum += e);
  
  return sum;
}


/* Mini-Max Sum
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let min=arr[0], max=[0], sum=0;
  
  arr.forEach(e => {
      if (e<min) min=e;
      if (e>max) max=e;
      sum += e;
  });
  
  console.log(`${sum-max} ${sum-min}`);
}


/* Diagonal Difference
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let a=0, b=0;

  for (let i in arr){
    for (let j in arr[i]){
      (i==j)? a += arr[i][j]: null;
      (j==arr.length-1-i)? b += arr[i][j]: null;
    }
  }

  return Math.abs(a-b);
}

/* Plus Minus
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 * Print the decimal value of each fraction on a new line with places after the decimal.
 * 
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let p=0,n=0,z=0;
  
  arr.forEach(e=>{
      (e>0)? p++: (e<0)? n++: z++;
  });
  
  console.log((p/arr.length).toFixed(6));
  console.log((n/arr.length).toFixed(6));
  console.log((z/arr.length).toFixed(6));
}