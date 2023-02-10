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