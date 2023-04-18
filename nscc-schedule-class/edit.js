let courses = [
    {
        id: 0,
        course: "PROG 2007",
        title: "Programming 2",
        instructor: "David",
        room: "123",
        color: "blue"
    },
    {
        id: 1,
        course: "Lunch",
        color: "pink"
    },
    {
        id: 2,
        course: "COMM 1000",
        title: "Professional Practices 2",
        instructor: "Ed",
        room: "MAR-Online",
        color: "peachpuff"
    },
    {
        id: 3,
        course: "PROG 2700",
        title: "Client side programming",
        instructor: "dav",
        room: "COG-114",
        color: "green"
    },
    {
        id: 4,
        course: "OSYS 1000",
        title: "Operating systems-linux",
        instructor: "shar",
        room: "123",
        color: "pink"
    },
    {
        id: 5,
        course: "SAAD 1001",
        title: "Intro to Sys analysis",
        instructor: "dav",
        room: "123",
        color: "red"
    },
    {
        id: 6,
        course: "Free",
        color: ""
    },
    {
        id: 7,
        course: "APPD 1001",
        title: "User interface design & dev",
        instructor: "dav",
        room: "123",
        color: "green"
    }
];
let timeslotLut = {
    "1-1": 4,
    "1-2": 4,
    "1-3": 0,
    "1-4": 1,
    "1-5": 0,
    "1-6": 0,
    "1-7": 5,
    "1-8": 5,


    "2-1": 0,
    "2-2": 0,
    "2-3": 6,
    "2-4": 1,
    "2-5": 6,
    "2-6": 6,
    "2-7": 7,
    "2-8": 7,


    "3-1": 4,
    "3-2": 4,
    "3-3": 0,
    "3-4": 1,
    "3-5": 7,
    "3-6": 6,
    "3-7": 5,
    "3-8": 3,


    "4-1": 2,
    "4-2": 4,
    "4-3": 7,
    "4-4": 1,
    "4-5": 0,
    "4-6": 5,
    "4-7": 3,
    "4-8": 3,


    "5-1": 3,
    "5-2": 7,
    "5-3": 6,
    "5-4": 1,
    "5-5": 6,
    "5-6": 2,
    "5-7": 5,
    "5-8": 4,

}
let currentCourseId = 0;
let currentCell = [0, 0];

/**********************************************
*              Dom Elements
**********************************************/
const sched = document.getElementById("sched");
const tds = document.querySelectorAll('#sched td');


// Modal & Form controls
const domModal = document.getElementById("editCourseModal");
const txtCourseName = document.getElementById("txtCourseName");
const txtCourseRoom = document.getElementById("txtCourseRoom");
const txtCourseInstructor = document.getElementById("txtCourseInstructor");
const btnSave = document.getElementById("btnSave");
const bsModal = new bootstrap.Modal(domModal);


/*
 * Retrieves a course object from an array of courses based on its ID.
 * @param {string} courseId - The ID of the course to retrieve.
 * @returns {object} - The course object matching the provided ID, or undefined if no match is found.
 */
function getCourse(courseId) {
    return courses.find(c => c.id === courseId);
}

/*
*This function populates the table cells with course information 
*and assigns colors to them based on the corresponding course data.
*/
let populateTable = function () {

    tds.forEach(function (td) {
        let rowId = td.cellIndex;
        let colId = td.parentNode.rowIndex;
        let courseId = timeslotLut[rowId + "-" + colId];
        let course = getCourse(courseId);
        td.innerHTML = '<p class="course-name">' + course.course + '</p><p class="instructor">' + course.instructor + '</p><p class="room">' + course.room + '</p>';
        td.style.backgroundColor = course.color;
    });
}

/*
*This function displays a modal dialog that allows the user to edit course information. 
*The function determines the cell that was clicked and populates the modal with the corresponding course data.
*/
let showEditModal = function (evt) {
    console.log(evt.target.tagName);
    let td;
    if (evt.target.tagName === "TD") {
        td = evt.target;
    } else if (evt.target.parentNode.tagName === "TD") {
        td = evt.target.parentNode; //evt.target = <p> so parentNode should be <td>
    }
    let rowId = td.cellIndex;
    let colId = td.parentNode.rowIndex;
    let courseId = timeslotLut[rowId + "-" + colId];
    let course = getCourse(courseId);
    txtCourseName.value = course.course;
    txtCourseRoom.value = course.room;
    txtCourseInstructor.value = course.instructor;

    currentCourseId = courseId;
    currentCell = [rowId, colId];
    bsModal.show();
}


/*
*This function updates the course information based on the input values in the modaldialog.
*If a new course is being created, a new object is added to the `courses` array. 
*If an existing course is being updated, the corresponding object in the `courses` array is modified. 
*The function then updates the table with the new course information and hides the modal.
*/
function updateCourse(evt) {
    console.log("Save Button!");
    //update the courses obj
    if (currentCourseId === 0) {
        courses.push({
            id: courses.length,
            course: txtCourseName.value,
            title: "",
            instructor: txtCourseInstructor.value,
            room: txtCourseRoom.value,
            description: "",
            color: ""
        })
        currentCourseId = courses.length - 1;
        timeslotLut[currentCell[0] + "-" + currentCell[1]] = currentCourseId;
    } else {
        console.log(currentCell, currentCourseId);
        let course = getCourse(currentCourseId);
        course.course = txtCourseName.value;
        course.room = txtCourseRoom.value;
        course.instructor = txtCourseInstructor.value;
    }
    //update the table
    populateTable();
    //close the modal
    bsModal.hide();

}

/*
*This code adds an event listener to the "Add" button, which shows a modal dialog when clicked. 
*When the "Save" button is clicked, the values entered into the input fields are extracted and can be used for further processing, such as adding them to an array or sending them to a server. 
*The modal is then hidden after the data is processed.
*/
// Add event listener to the Add button
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", function () {
    // Show the modal
    const modal = document.querySelector("#add-modal");
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // Get the values of the input fields when the Save button is clicked
    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", function () {
        const courseName = document.getElementById("course-name").value;
        const courseCode = document.getElementById("course-code").value;
        const startTime = document.getElementById("start-time").value;
        const endTime = document.getElementById("end-time").value;

        // Do something with the values such as add them to an array or send them to the server
        console.log(courseName, courseCode, startTime, endTime);

        // Close the modal
        modalInstance.hide();
    });
});
/**********************************************
 *              Event Listeners
**********************************************/
tds.forEach(td => td.addEventListener("click", showEditModal));
btnSave.addEventListener("click", updateCourse);

// let btnEdit = document.getElementById("btnEdit");
// btnEdit.addEventListener("click",)



// const tds = document.querySelectorAll(".table-sched td");
// tds.forEach(td => td.addEventListener("click", function(evt) {
//     console.log("hi",evt);
// }));



populateTable();

