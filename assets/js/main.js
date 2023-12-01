// Light/Dark theme
$("#theme-icon").click(function () {
    $("body").removeClass("gradient");
    let element = document.body;
    let theme = element.dataset.bsTheme;
    element.dataset.bsTheme = theme == "light" ? "dark" : "light";
    if (theme == "dark") {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $(".header").removeClass("bg-white bg-dark")
            $(".header").addClass("bg-white");
        }
        $("#theme-icon").attr("src", "./assets/images/moon.png")
        // $("body").addClass("gradient");
    }
    else {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $(".header").removeClass("bg-white bg-dark")
            $(".header").addClass("bg-dark");
        }
        $("#theme-icon").attr("src", "./assets/images/sun.png")
        $("path").attr("fill", "white")

    }
})

// Nav bar


$(window).scroll(function () {
    let theme = document.body.dataset.bsTheme;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (theme == "light") {
            $(".header").addClass("bg-white shadow");
        }
        else
            $(".header").addClass("bg-dark shadow");
    }
    else {
        $(".header").removeClass("bg-white bg-dark shadow")
    }
});
$(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("navbar-dark bg-dark");
    $(".nav-link").toggleClass("removeNavAnimated")
})

$('html').click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $('.navbar-toggle').toggleClass('highlight');
        CloseNav();
    }

});

// Animations
var reveals = document.querySelectorAll(".reveal");
reveals[0].classList.add("active");
function reveal() {


    for (var i = 1; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Back to top Button
let backToTopBtn = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// loading
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });
})