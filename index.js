//newPerson in line is fed into function
var i = 0;
// katzdeli = []
function takeANumber(katzDeli) {

//interpolated message that welcomes the newPerson
//i = i + 1
    katzDeli.push(++i);
      return `Welcome, you are number ` + i + ` in line.`;
//returns value welcomeMessage 

}


////// katzDeli = [1, 2, 3, 4];

function nowServing(katzDeliLine) {
  var emptyLine = "There is nobody waiting to be served!";
//return string for an empty line
  if (katzDeliLine.length === 0) {
    return emptyLine;
  }
// removes the person at the beginning of the line out of the array and announces that they are next to be served  
  else { 
    var nextUp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ` + nextUp + `.`; 

//// return  `Currently serving ${katzDeliLine.shift()}.`; 
/// katzdeli = [2, 3, 4];
  }
}

//////

// returns the string value for an empty line 

function currentLine(deliLine) {
  var line = [];
  var welcome = `The line is currently: `;
    if (deliLine.length === 0) {
      return "The line is currently empty.";
    }
 
 // line variable reinitiatlizes the return value at the end of the loop and incremenets ontop of it each time through 
 else {
    for (var i = 0; i < deliLine.length; i++) {
      line.push(`${i+1}. ${deliLine[i]}`);
    ////line = ["1. 2"];
    ////line = ["1. 2", "2. 3", "3. 4"];
// this makes sure there are no extra names selected (e.g. undefined)     
      if (i < (deliLine.length - 1))  {
        line = line + `, `;
      } 
    }//// 
    return welcome + line.join(', ');
  }  
}  
