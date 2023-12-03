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

        $("path").attr("fill", "black")

        // Kiểm tra nav-bar có đang mở
        if (!$(".navbar").hasClass('bg-dark')) {
            $(".navbar-brand > img").attr("src", "./assets/images/logo-khoa.png")
        } 
        // $("body").addClass("gradient");
        $("#feedback").css("background-image", "url('./assets/images/feedback-light.png')");
    }
    else {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $(".header").removeClass("bg-white bg-dark")
            $(".header").addClass("bg-dark");
        }
        $("#theme-icon").attr("src", "./assets/images/sun.png")
        $("path").attr("fill", "white")
        $(".navbar-brand > img").attr("src", "./assets/images/logo-footer.png")
        $("#feedback").css("background-image", "url('./assets/images/feedback-dark.png')");
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

// Xử lí sự kiện toggle nav-bar
$(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("navbar-dark bg-dark");
    $(".nav-link").toggleClass("removeNavAnimated")

    // Kiểm tra xem navbar hiện tại đang có bg là gì, đổi màu logo theo bg
    if ($(".navbar").hasClass('bg-dark')) {
        $(".navbar .logo").attr('src', './assets/images/logo-footer.png');
    } else  {
        $(".navbar .logo").attr('src', './assets/images/logo-khoa.png');
    }
})

$('html').click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $('.navbar-toggle').toggleClass('highlight');
        CloseNav();
    }
});

// Scroll Animations
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