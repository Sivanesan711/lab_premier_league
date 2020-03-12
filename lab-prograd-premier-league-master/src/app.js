//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let Manager=[managerName,managerAge,currentTeam,trophiesWon];

console.log(Manager);

// Don't edit the following cod
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
function Formation(arr) {
  if (arr.length == 0)
    return null;
   let a= {
    "defender": arr[0],
   "midfield": arr[1],
    "forward": arr[2]
   };
   return a;
 }


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in _ year
function filterByDebut(year) {
  let a = [];
   
    for (var i = 0; i < players.length; i++)
      if (players[i].debut == year)
      arr.push(players[i]);
  
     return a;
  
   }

//Progression 4 - Filter players that play at the position ___
function ByPosition(position) {
  let a = [];
  for (var i = 0; i < players.length; i++)
  if (players[i].position == position)
  a.push(players[i]);
    return a;
         
         }
  
//Progression 5 - Filter players that have won __ award
function ByAward(awardName) {
  let a = [];
  for (var i = 0; i < players.length; i++)
  for (var j = 0; j < players[i].awards.length; j++)
  if (players[i].awards[j].name == awardName)
  if (!(a.includes(players[i])))
  a.push(players[i]);
         return a;
         }
  
//Progression 6 - Filter players that won __ award __ times
function ByAward(awardName, noOfTimes) {
  let a = [];
  var count = 0;
  for (var i = 0; i < players.length; i++) {
   
   for (var j = 0; j < players[i].awards.length; j++)
     if (players[i].awards[j].name == awardName)
       count++;
    if (count == noOfTimes)
     a.push(players[i]);
  }
  return a;
}

//Progression 7 - Filter players that won __ award and belong to __ country
function ByAwardCountry(awardName, country) {
  let a = [];
   for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
       if ((players[i].awards[j].name == awardName) && (players[i].country == country))
         if (!(a.includes(players[i])))
           a.push(players[i]);
   return a;
 }

//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than __
function filterByNoOfAwards(noOfAwards, team, age) {
  let a = [];
  for (var i = 0; i < players.length; i++) {
    var count = 0;
    if ((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age < age))
      a.push(players[i]);
  }
  return a;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
      
  for (var i = 0; i < players.length; i++) {
for (var j = 0; j < players.length - 1 - i; j++) {
var l = players[j].compareTo(players[j + 1]);
 if (l != -1) {
let temp = players[j];
players[j] = players[j + 1];
players[j + 1] = temp;
}
   }
   }
  return players;
 
 }


//Progression 10 - Sort players beloging to ___ team in descending order of awards won
function Belongto(team) {
      
  for (var i = 0; i < players.length; i++) {
for (var j = 0; j < players.length - 1 - i; j++) {
var l = players[j].compareTo(players[j + 1]);
 if (l != -1) {
let temp = players[j];
players[j] = players[j + 1];
players[j + 1] = temp;
}
   }
   }
  return players;
 
 }


//Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than ___ years in alphabetical order
//Sort the awards won by them in reverse chronological order