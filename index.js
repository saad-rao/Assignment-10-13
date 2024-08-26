
// Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3”



// var inputNumber = +prompt("Enter a Number")
// var divide = inputNumber%3
// var result = divide

// if ( inputNumber % 3 == 0 ){
//     document.write(inputNumber +' '+ "is divisible by 3 and the answer is" +' '+ result)
// }

// else{
//     document.write(inputNumber +' '+ "is not divisible by 3 and the answer is" +' '+ result)
// }




// Write a program that checks whether the given input is an even 
// number or an odd number.

// var inputNumber = +prompt("Enter a number")

// if ( inputNumber%2==0){
//     document.write("The given number is even")
// }

// else{
//     document.write("The given number is odd")
// }




// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young"


// var age = +prompt("Enter your age")

// if( age >= 18){
//     document.write("old enough")

// }

// else{
//     document.write("Too young")
// }



// Write a program that prompts the user for their name, and then 
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output

// var name1 = prompt("Enter the name");

// if(name1 == "saad" ){
//     document.write("hello ser G ")
// }


// Write a program that takes time as input from user in 24 hours 
// clock format like: 1900 = 7pm. Implement the following case 
// using if, else & else if statements




var input = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7:00 PM):"));



if (input >= 0 && input < 1200) {
    alert("Good morning honey! ");
} else if (input >= 1200 && input < 1700) {
    alert("Good afternoon honey! ");
} else if (input >= 1700 && input < 2100) {
    alert("Good evening honey! ");
} else if (input >= 2100 && input <= 2359) {
    alert("Good night honey! ");
} else {
    alert("Please enter a valid time");
}