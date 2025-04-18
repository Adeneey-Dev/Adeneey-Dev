//1. A Function that compare a student's score if it's Passes or Failed
function studentScore() {
    const score = 150
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}
studentScore();

//2. A Function that accept age, compare and return if the person is Eligible to vote or not
function eligibleVote() {
  const age = 25;
  if (age >= 18) {
    return "You are eligible to vote";
  } else {
    return "Not eligible";
  }
}
console.log(eligibleVote());

//3. A Function that take a name and score, then return Excellent, Good, Average and Fail based on the score
function scoreRemark(score) {
  if (score >= 90) {
    console.log("Excellent");
  } else if (score >= 75) {
    console.log("Good");
  } else if (score >= 50) {
    console.log("Average");
  } else {
    console.log("Fail");
  }
}
scoreRemark(80);

//4. A Function that take in two boolean values and return Access granted only if both are true
function checkAccess(hasID, isAbove18) {
  
  if (hasID && isAbove18 > 18) {
    return "Access granted"
  }
}
console.log(checkAccess(true, 25));

//5. Using a for loop for array of student, to determine if the student Pass or Fail
const array = [60, 30, 70, 50, 50, 20, 80, 90, 75, 10, 50, 95]

for (let i = 0; i < array.length; i++) {
  const score = array[i];
  if (score > 50) {
    console.log("Pass");
  } else if (score <= 50) {
    console.log("Fail");
  }
}

//6. Writing arrow function to test if a student pass english and maths (score >= 50)
const checkScore = (mathsScore, englishScore) => {
  return (
    mathsScore >= 50 && englishScore >= 50 ? "YES" : "NO"
  );
}
console.log(checkScore(70, 80));
console.log(checkScore(40, 60));

//7. A Function to check user email and phone number before signing up
function checkUser() {
  const email = "oyewolesaheed638@gmail.com"
  const phoneNumber = ""
  if (email || phoneNumber) {
    console.log("You can signup with your email");
  } else {
    console.log("Input your email or phonenumber");
  }
}
checkUser();

//8. A function that check username and password for invalid input
function checkUsernamePassword(username, password) {
  if (username || password) {
    return "Invalid input"
  } else {
    return "Valid input"
  }
}
console.log(checkUsernamePassword("OyewoleSaheed", ""));

//A Function that check for hours of woork: Fulltime or Part-time using the ternary operator
function checkTimeWork(hours) {
  return (
     hours >= 40 ? "Full-time" : "Part-time"
  );
}
console.log(checkTimeWork(50));

//10. An Arrow Function that take two number and return the larger one
const largerNumber = (num1, num2) => {
  return (
    num1 > num2 ? num1 : num2
  ) 
}
console.log(largerNumber(70, 80));