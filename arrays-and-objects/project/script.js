// init students array 
const students = [];

function addStudent(name, grade) {
    students.push({
        name,
        grade,
    });
}

// function to remove student
function removeStudent(name) {
    const index = students.findIndex((student) => student.name === name) //fix this
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else {
        console.log(name, "was not found");
    }
}


// Function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// Function to map student in formatted list
function formatStudentList() {
    return students.map((student) => `${student.name} - Grade: ${student.grade}`)
}

//Start
console.log("students = ", students);

// Add students
addStudent("Alice", 85);
addStudent("Bob", 72);
addStudent("Brian", 95);
addStudent("Tim", 52);
addStudent("Nick", 82);

// console.log("students = ", students);
console.log("STUDENT LIST: ");
console.log(formatStudentList());

removeStudent("Nick")

console.log("STUDENT LIST: ");
console.log(formatStudentList());

console.log("Students with Grade equal to or higher than 80")
console.log(filterTopStudents(80));

