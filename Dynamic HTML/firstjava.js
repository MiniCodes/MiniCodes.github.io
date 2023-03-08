/* function to print class information for 
My first Java page */
function PrintClassInfo() {
    /* variables for my name, my teacher's name & 
    course name */
    let x = "Aunna"
    let y = "Kim Gross"
    let z = "Web Design II"

    // prints the name for class information
    document.getElementById("name").innerHTML = 
    "Name:" + " " + x;

    // prints the teacher's name for class information
    document.getElementById("teacherName").innerHTML = 
    "Course Name:" + " " + y;

    // prints the course's name for class information
    document.getElementById("courseName").innerHTML = 
    "Teacher Name:" + " " + z;
}

// function to print the given variable & asked for number
function PrintMath() {
    // variable of x
    var x = 24

    // value of favNum is inputted by user
    var favNum = document.getElementById("favNumber").value;
    
    // converts string of favNum into an integer
    var favNum = parseInt(favNum)

    // adds the variables x and favNum together to get answer
    if (favNum != null) {
        document.getElementById("math").innerHTML = 
        x + favNum;
    }
}


// function for Math Calculator for Addition
function CalAdd() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);

    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum + secondCalNum;
    }
}

// function for Math Calculator for Subtraction
function CalSub() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);

    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum - secondCalNum;
    }
}

// function for Math Calculator for Multiplication
function CalMultiply() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);

    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum * secondCalNum;
    }
}

// function for Math Calculator for Division
function CalDivide() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);
    
    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum / secondCalNum;
    }
}


function LoopMath() {
    /* Defines inputs for the two numbers */
    let loopOne = document.getElementById("loopNum1").value
    let loopTwo = document.getElementById("loopNum2").value
    
    let loopEnd = document.getElementById("loopEnd").value

    /* Turns all inputs into integers */
    loopOne = parseInt(loopOne)
    loopTwo = parseInt(loopTwo)
    loopEnd = parseInt(loopEnd)

    //document.getElementById("testLoop").innerHTML = 
    //loopOne + "<br>" + loopTwo + "<br>" + loopEnd

    let doLoop = true
    var total = 0;
    while(doLoop) {
        if(loopEnd == -1){
            doLoop = false
        }else{
          total += loopOne + loopTwo
       
        }
    }
    document.getElementById("testLoop").innerHTML = total
}