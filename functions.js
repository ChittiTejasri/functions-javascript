// Named function without input and without return.
// Display Company Name
// Declaration or Defining
function companyName(){
    console.log("Infosys")
}
// Invoking or Calling
companyName()

// 2.Print Multiplication table.
// Declaration or Defining
function Multiplication(){
    for(let i = 1;i<=10;i=i+1){
        console.log("5 * " + i + " = " + (5 * i))
    }
}
// Invoking or Calling
Multiplication()

// 3.print Fibonacci series.
// Declaration or Defining
function Fibonacci(){
    a = 0;
    b = 1;
    for(let i=1;i<=10;i=i+1){
        console.log(a)
        c = a + b;
        a = b;
        b = c;
    }
}
// Invoking or Calling
Fibonacci()


// Named Function with input and without Return.
// Check leap year.
function LeapYear(year){
    if(year%4 == 0){
        console.log(year ="is a Leap year")
    } else {
        console.log(year ="is not a Leap year")
    }
}
// Invoking or Calling
LeapYear(2024)

// 2.Calculate Employee Bonus.
// Declaration or Defining
function employeeBonus(salary,percentage){
    let bonus = salary * percentage / 100;

    console.log("Bonus  =  ",bonus);
}
// Invoking or Calling
employeeBonus(30000,10)

// 3.check perfect Number.
// Declaration or Defining
function perfectNumber(n){
    let sum = 0
    for(let i = 1;i < n; i=i+1){
        if(n % i == 0){
            sum = sum + i
        }
    }
    if(sum == n){
        console.log(n = "is a Perfectnumber")
    } else {
        console.log(n = "is not a perfect number")
    }

}
perfectNumber(28)


// Named function without input and with return.
// 1.Return user name
function getuserName(){
    return "Tejasri"
}
let userName = getuserName()
console.log("UserName =",userName)

// 2.count numbers divisible by 3.
function Divisible(){
    let count = 0
    for(let i = 1;i <= 20;i=i+1){
        if(i % 3 == 0){
            count = count + 1
        }
    }
    return count;
}
console.log("count =",Divisible())

// 3.find factorial of a given Number.
function Factorial(){
    let n = 5;
    let fact = 1;

    for(let i = 1;i<= n;i=i+1){
        fact = fact * i
    }
    return fact;
}
console.log("Factorail =",Factorial())


// Named function with Input and with Return.
// 1.calculate the Area of a square.
function Areaofsquare(side){
    return side * side;
}
let result = Areaofsquare(8)
console.log("AreaofSquare =",result)

// 2.calculate Electricity bill.
function ElectricityBill(units){
    let bill;
    if(units <= 100){
        bill = units * 2;
    } else if(units <= 200){
        bill = units * 3
    } else {
        bill = units * 5
    }
    return bill;
}
let units =  ElectricityBill(200);
console.log("Electricity Bill =",units)


// 3.check palindrome.
function CheckPalindrome(n){
    let value = n;
    let reverse = 0;

    while(n > 0){
        digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }
    return value == reverse;

}
let ans = CheckPalindrome(121);
console.log("Palindrome =",ans)
