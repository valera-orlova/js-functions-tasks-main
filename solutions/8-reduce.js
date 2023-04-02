// BEGIN
const groupBy = (students, key) => {
    let groupedStudents = [];

    for (let student of students) {
        let element = student[key];
        if (!groupedStudents[element]) {
            groupedStudents[element] = [];
        }
        
        groupedStudents[element].push(student);

    }

    return groupedStudents;
}

export default groupBy;
// END