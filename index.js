console.log("hiiii");

//Decision making
let n = 50;
//   if( n> 10){
//     console.log('n is greater than 10');
//   }else if (n == 10){
//     console.log('n is  equal to 10');
//   }
// else{
//     console.log("n is less than")
// }
if (n > 10 || n >= 10) {
  console.log("n is greater than 10 and equal");
} else {
  console.log("n is less than");
}

//day4

//Switch Statement

//find the grade

let marks = prompt("enter your marks"); // prompt always give the input type string
let grade;

switch (true) {
  case marks >= 41 && marks <= 50:
    grade = "A";
    break;
  case marks >= 31 && marks <= 40:
    grade = "B";
    break;
  case marks >= 21 && marks <= 30:
    grade = "C";
    break;
  case marks >= 11 && marks <= 20:
    grade = "D";
    break;
  case marks >= 0 && marks <= 10:
    grade = "fail";
    break;

  default:
    grade = "Invailid marks";
    break;
}
console.log(grade);

//switch week

let days = prompt("enter your day no.");
let day;
switch (true) {
  case days == 1:
    day = "monday";
    break;
  case days == 2:
    day = "tues";
    break;
  case days == 3:
    day = "wednesday";
    break;
  case days == 4:
    day = "thur";
    break;
  case days == 5:
    day = "fri";
    break;
  case days == 6:
    day = "sat";
    break;
  case days == 7:
    day = "sud";
    break;

  default:
    day = "invailid days";
    break;
}
console.log(day);

//months

let months = prompt("Enter your month");
let month;
switch (true) {
  case months == 1:
    month = "jan";
    break;
  case months == 2:
    month = "feb";
    break;
  case months == 3:
    month = "march";
    break;
  case months == 4:
    month = "april";
    break;
  case months == 5:
    month = "may";
    break;
  case months == 6:
    month = "june";
    break;
  case months == 7:
    month = "july";
    break;
  case months == 8:
    month = "august";
    break;
  case months == 9:
    month = "september";
    break;
  case months == 10:
    month = "octuber";
    break;
  case months == 11:
    month = "november";
    break;
    case months == 12:
        month ="december"
        break;
        
  default: "Invailid month"
    break;
}
console.log(month)
