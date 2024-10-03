let students = [];

// Function to add a student to the list
function addStudent() {
    const name = document.getElementById('studentName').value;
    const grade = parseFloat(document.getElementById('averageGrade').value);

    if (name && !isNaN(grade)) {
        students.push({ name, grade });
        alert(`Added student: ${name} with grade: ${grade}`);
        document.getElementById('studentName').value = '';
        document.getElementById('averageGrade').value = '';
    } else {
        alert("Please enter a valid name and grade.");
    }
}

// Function to sort the students by grade and display the result
function sortStudents() {
    if (students.length === 0) {
        alert("No students to sort.");
        return;
    }

    // Sort by grades in descending order
    students.sort((a, b) => b.grade - a.grade);

    // Display sorted students
    displaySortedStudents(students);
}

// Function to display sorted students and categorize them by honors
function displaySortedStudents(sortedStudents) {
    const highestGradeTbody = document.querySelector('#highestGradeTable tbody');
    const honorsTbody = document.querySelector('#honorsTable tbody');

    // Clear previous results
    highestGradeTbody.innerHTML = '';
    honorsTbody.innerHTML = '';

    // Display the student with the highest grade
    const highestStudent = sortedStudents[0];
    const highestHonor = getHonor(highestStudent.grade);
    highestGradeTbody.innerHTML = `
        <tr>
            <td>${highestStudent.name}</td>
            <td>${highestStudent.grade}</td>
            <td>${highestHonor}</td>
        </tr>`;

    // Categorize and display students with honor or high honor
    let placement = 1;
    sortedStudents.forEach(student => {
        let honor = getHonor(student.grade);

        // Display in the honors table if the student qualifies for an honor
        honorsTbody.innerHTML += `
            <tr>
                <td>${placement}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>${honor}</td>
            </tr>`;
        placement++;
    });
}

// Function to determine the honor category based on the grade
function getHonor(grade) {
    if (grade >= 98 && grade <= 100) {
        return "Highest Honor";
    } else if (grade >= 95 && grade <= 97) {
        return "High Honor";
    } else if (grade >= 90 && grade <= 94) {
        return "With Honor";
    }
    else
        return "No Placement"
    return '';
}

// Function to print only the table view
function printPage() {
    window.print();
}
