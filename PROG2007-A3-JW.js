// Load Time Event

window.onload = function () {
    alert('Welcome to my Class Schedule');
};

// Mouseover event 
document.getElementById("table").onmouseenter = function () { mouseEnter() };
document.getElementById("table").onmouseleave = function () { mouseLeave() };

function mouseEnter() {
    document.getElementById("table").style.color = "red";
}

function mouseLeave() {
    document.getElementById("table").style.color = "black";
}

// On click event #1 click the button 
document.getElementById("Second").onclick = function () { myFunction() };
function myFunction() {
    document.getElementById("Second").innerHTML = "School Rocks!";
}

// On click event #2 click class schedule
function myFunction1() {
    document.getElementById("school").innerHTML += "Boo! ";
}

//key press event
document.addEventListener('keydown', function (event) {
    console.log('Keypressed: ${event.key}');
    if (event.key) {
        window.alert('A key pressed');
    }
});