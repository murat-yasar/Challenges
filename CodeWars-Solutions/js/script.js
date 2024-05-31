
//* (7kyu) Isograms
/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Implement a function that determines whether a string that contains only letters is an isogram. 
 * Assume the empty string is an isogram. Ignore letter case.
 * 
 * @param {string} str 
 * @returns bool
 */
function isIsogram(str){
  for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j < str.length; j++) {
      if(str[i].toLowerCase() === str[j].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}


//* (7kyu) Categorize New Member
/**
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. 
 * 
 * To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
 * 
 * @param {array} data 
 * @returns array
 */
function openOrSenior(data){
  let result = [];
  
  for (let i = 0; i < data.length; i++){
    data[i][0] > 54 && data[i][1] > 7 ? result.push("Senior") : result.push("Open");
  }
  return result;
}


//* (7kyu) Frog's Dinner
/**
 * You are sat with two frogs on a log, Chris and Tom. They are arguing about who ate the most flies (Poor flies, but what you going to do!). Chris says "I ate the summation of n number of flies!". 
 * Tom replies "Take half the number you ate then round it down and work out the summation of that, that is how many I ate"! 
 * Cat then hops onto the log looking pleased with herself "Well, I ate the summation of both your dinners combined." Loz who came late to this meeting of amphibians is very confused, he asks "So how many did each of you eat?" 
 * 
 * Write a function called frogContest which returns a string "Chris ate {number} flies, Tom ate {number} flies and Cat ate {number} flies" 
 * 
 * {number} is the integer value of the amount of flies eaten by each.
 * 
 * @param {int} n 
 * @returns string
 */
function frogContest(n) {
  let chris=0, tom=0, cat=0;
  
  for(let i=1; i<=n; i++) chris += i;
  for(let i=1; i<=chris/2; i++) tom += i;
  for(let i=1; i<=chris+tom; i++) cat += i;
  
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`;
}


//* (8kyu) Abbreviate a Two Word Name
/**
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. 
 * The output should be two capital letters with a dot separating them.
 * 
 * @param {string} name 
 * @returns 
 */
function abbrevName(name){
  const nameArr = name.split(" ");
  let output = "";
  
  for(let i in nameArr){
    output += nameArr[i][0].toUpperCase();
    if (i<nameArr.length-1) output += ".";
  }
  
  console.log(nameArr);
  console.log(output);
  return output;
}


//* (7kyu) Painted Sides
/**
 * You are given a big cube, made up of several little cubes. You paint the outside of the big cube and are now supposed to find out how many of the little cubes have zero faces painted, one face painted, two faces painted, etc. 
 * Write a function which accepts two parameters:
 *    length: the side length of the big cube (in little cubes), 0 <= length <= 50 
 *    n: the number of faces painted, 0 <= n <= 7  
 * 
 * You have to figure out how many of the little cubes have n faces painted.
 * 
 * @param {int} s 
 * @param {int} n 
 * @returns int
 */
function paintedFaces(s,n) {
  if (s==1 && n==6) return 1;
  else if (n==3 && s>=2) return 8;
  else if (n==2 && s>2) return 12*(s-2);
  else if (n==1 && s>2) return 6*(s-2)**2;
  else if (n==0 && s>2) return (s-2)**3;
  else return 0;
}


//* (7kyu) From A to Z
/** 
 * Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. 
 * Note that if the range is given in capital letters, return the string in capitals also!
 * 
 * @param {string} sp 
 * @returns string
 */
function gimmeTheLetters(sp) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output = "";
  
  for (let i=letters.search(sp[0]); i<=letters.search(sp[2]); i++)
    output += letters[i];
  
  return output;
}


//* (7kyu) Closing in Sum
/** 
 * Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.
 * 
 * @param {string} n 
 * @returns int
 */
function closingInSum(n) {
  let output=0, input=n.toString().split('');
  
  if (input.length%2 == 0) {
    for (let i=0; i<input.length/2; i++){
      let temp = input[i].concat(input[input.length-1-i]);
      output += parseInt(temp);
  }}
  else {
    for (let i=0; i<input.length/2-1; i++){
      let temp = input[i].concat(input[input.length-1-i]);
      output += parseInt(temp);
    }
    output += parseInt(input[Math.floor(input.length/2)]);
  }
  
  console.log(input, " -> ", output)
  return output;
}

//* (8kyu) Even or Odd
/** 
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 * 
 * @param {int} number 
 * @returns string
 */
function evenOrOdd(number) {
  let output = (number%2 == 0)? "Even" : "Odd";
  return output;
}


//* (7kyu) Odd-Even String Sort
/** 
 * Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
 * 
 * @param {int} S 
 * @returns string
 */
function sortMyString(S) {
  let even='', odd='';

  for (let i in S)
    (i%2 == 0)? even += S[i] : odd += S[i];

  return `${even} ${odd}`;
}


//* Can I play right now?
/**
 * I define a prime-time as a time period till which little brother have a permission to play computer games. I specify start hour and end hour as pair of integers.
 * I need a function which will take three numbers - a present moment (current hour), a start hour of allowed time period and an end hour of allowed time period. 
 * The function should give answer to a question (as a boolean): "Can my brother play in specified time?"
 */
//Alt-1
function canIPlay(now,start,end) {
  let output;
  
  if(end>start)
    output = (now>=start && now<end)? true : false;
  else
    output = ((now>=start && now<24) || (now<=start && now<end))? true : false;
  
  console.log(now,start,end,output)
  return output ;
}

// Alt-2
function canIPlay(now,start,end) {
  
  let output = ((end>start && now>=start && now<end) || (end<start && ((now>=start && now<24) || (now<=start && now<end))))? true : false;
  
  console.log(now,start,end,output)
  return output ;
}