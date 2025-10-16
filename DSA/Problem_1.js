let studentList = ["Alice", "Bob", "Charlie", "David", "Eve"];

function findStudent(List, name) {
    List.forEach(element => {
        if (element === name) {
            console.log(`${name} is found in the list.`);
        } 
    })
}

findStudent(studentList, "Charlie");