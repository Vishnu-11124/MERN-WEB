
// Student grading system
function calculateGrade(total,obtained) {
    if (total <= 0 || obtained < 0 || obtained > total) {
        return "Invalid input";
    }
    
    const percentage = (obtained / total) * 100;

    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Example usage
const totalMarks = 100;
const obtainedMarks = 85;
const grade = calculateGrade(totalMarks, obtainedMarks);
console.log(`Total Marks: ${totalMarks}, Obtained Marks: ${obtainedMarks}, Grade: ${grade}`); // Output: Total Marks: 100, Obtained Marks: 85, Grade: B
