
function addstudent() {

    let input = document.querySelector("#game");
    let studentList = document.querySelector("#studentList");

    if(input.value === ""){
        alert("Enter Student Name");
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td></td>
        <td>${input.value}</td>
        <td class="status absent">Absent</td>
        <td>
            <button onclick="markattendance(this)" class="mark">
                Mark Present
            </button>
        </td>
        <td>
            <button onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;

    studentList.append(row);

   updateIds();
updatestudent();
updatepresent();
updateabsent();
    input.value = "";
}

function markattendance(button){

    let row = button.parentElement.parentElement;
    let attendance = row.querySelector(".status");

    if(attendance.innerText === "Absent"){

        attendance.innerText = "Present";
        button.innerText = "Mark Absent";

        attendance.classList.remove("absent");
        attendance.classList.add("present");

        attendance.style.color = "green";

    }else{

        attendance.innerText = "Absent";
        button.innerText = "Mark Present";

        attendance.classList.remove("present");
        attendance.classList.add("absent");

        attendance.style.color = "red";
    }

    updatepresent();
    updateabsent();
}


function deleteStudent(button){
    let deleterow = button.parentElement.parentElement;
    deleterow.remove();

    updateIds();
    updatestudent();
    updatepresent();
    updateabsent();
}

function updateIds() {
    let row = document.querySelectorAll("#studentList tr");

    for (let i = 0; i < row.length; i++) {
        row[i].children[0].innerText = i + 1;
    }

}
function updatestudent(){
    let count = 0;
    let row = document.querySelectorAll("#studentList tr");
    let update = document.querySelector("#totalstudent");
    count=count+row.length;
    update.innerText = count;
}

function updatepresent(){
    let presentStudents = document.querySelectorAll(".present");
    let update = document.querySelector("#totalpresent");

    update.innerText = presentStudents.length;
}

function updateabsent(){
    let absentStudents = document.querySelectorAll(".absent");
    let update = document.querySelector("#totalabsent");

    update.innerText = absentStudents.length;
}