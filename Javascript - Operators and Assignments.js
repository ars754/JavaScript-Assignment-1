console.log("Javascript - Operators and Assignments")
// Q1. Add two Numbers
function AddTwoNumbers(A, B) 
{
  return A + B;
}
// Q2. Find if the conditions are obeyed or not
function Is_Valid(A, B) 
{
  return (A < 10 && A > B);
}
// Q3. Check the conditions
function Check(A, B) 
{
  if (A % 10 === 0 && B % 10 === 0) 
    {
      return true;
    } 
    else if (A % 10 !== 0 && B % 10 !== 0) 
    {
      return false;
    } 
    else 
    {
        return true;
    }
}
// Q4. Find the first digit of a 4 digit number
function First_Digit(N) 
{
  return parseInt(N.toString()[0]);
}
// Q5. Find the last digit of a 4 digit number
function Last_Digit(N) 
{
  return N % 10;
}
// Q6. Find the remainder
function Find_the_remainder(A, B) 
{
  return B % A;
}
// Q7. Multiply two Numbers
function Multiply_two_number(A, B) 
{
  return A * B;
}
// Q8. Marks Calculator
function Sum(A, B, C) 
{
  return A + B + C;
}
function Average(A, B, C) {
  return parseFloat(((A + B + C) / 3).toFixed(2));
}
console.log("Test Cases");
console.log("Q1 AddTwoNumbers(2, 5):", AddTwoNumbers(2, 5));                 // 7
console.log("Q2 Is_Valid(5, 3):", Is_Valid(5, 3));                           // true
console.log("Q3 Check(12, 20):", Check(12, 20));                             // true
console.log("Q4 First_Digit(4567):", First_Digit(4567));                    // 4
console.log("Q5 Last_Digit(4567):", Last_Digit(4567));                      // 7
console.log("Q6 Find_the_remainder(2, 9):", Find_the_remainder(2, 9));      // 1
console.log("Q7 Multiply_two_number(2, 5):", Multiply_two_number(2, 5));    // 10
console.log("Q8 (a)Sum(50, 20, 100):", Sum(50, 20, 100));                       // 170
console.log("Q8 (b)Average(50, 20, 100):", Average(50, 20, 100));              // 56.67