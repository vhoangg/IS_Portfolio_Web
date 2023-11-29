$(window).scroll(function () {
    if (window.pageYOffset > 100) {
        $(".header").addClass("bg-white", 'shadow')
    }
    else {
        $(".header").removeClass("bg-white", 'shadow')
    }
});
$(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("navbar-dark bg-dark");
})

$('html').click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $('.navbar-toggle').toggleClass('highlight');
        CloseNav();
    }

});

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