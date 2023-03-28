let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Buttons
//const prevBTN = document.getElementById("prev");
//const nextBTN = document.getElementById("next");
//prevBTN.addEventListener("click", () => plusSlides(-1));
//nextBTN.addEventListener("click", () => plusSlides(1));

//Dots
//const dot1 = document.getElementById("dot1");
//const dot2 = document.getElementById("dot2");
//const dot3 = document.getElementById("dot3");

//dot1.addEventListener("click", () => currentSlide(1));
//dot2.addEventListener("click", () => currentSlide(2));
//dot3.addEventListener("click", () => currentSlide(3));

// Buttons Jquery
$(document).ready(function () {
    $("#prev").click(function () {
        plusSlides(-1)
        $("slideshow-container").fadeout();
    });
});

$(document).ready(function () {
    $("#next").click(function () {
        plusSlides(1)
        $("slideshow-container").fadein();
    });
});

// Dots Jquery
$(document).ready(function () {
    $("#dot1").click(function () {
        currentSlide(1)
    });
});

$(document).ready(function () {
    $("#dot2").click(function () {
        currentSlide(2)
    });
});

$(document).ready(function () {
    $("#dot3").click(function () {
        currentSlide(3)
    });
});

