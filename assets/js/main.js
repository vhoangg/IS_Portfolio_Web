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
        // Đổi sang icon moon và màu sang đen
        $("#theme-icon path").attr("d", "M24.473 0C10.2571 4.76864 0 18.1748 0 34.0103C0 53.8946 16.1054 70 35.9897 70C51.8252 70 65.2314 59.7429 70 45.527C66.401 46.6967 62.5321 47.5064 58.4833 47.5064C38.599 47.5064 22.4936 31.401 22.4936 11.5167C22.4936 7.46787 23.2134 3.59897 24.473 0Z")
        $("path").attr("fill", "black")

        // Đổi màu chữ ở contact fragment 
        $(".homepage .contact a").css("color", "black");
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
        // Đổi sang icon sun và màu sang trắng
        $("#theme-icon path").attr("d", "M30 0C27.9 0 26.25 1.65 26.25 3.75C26.25 5.85 27.9 7.5 30 7.5C32.1 7.5 33.75 5.85 33.75 3.75C33.75 1.65 32.1 0 30 0ZM11.25 7.5C9.15 7.5 7.5 9.15 7.5 11.25C7.5 13.35 9.15 15 11.25 15C13.35 15 15 13.35 15 11.25C15 9.15 13.35 7.5 11.25 7.5ZM48.75 7.5C46.65 7.5 45 9.15 45 11.25C45 13.35 46.65 15 48.75 15C50.85 15 52.5 13.35 52.5 11.25C52.5 9.15 50.85 7.5 48.75 7.5ZM30 15C21.75 15 15 21.75 15 30C15 38.25 21.75 45 30 45C38.25 45 45 38.25 45 30C45 21.75 38.25 15 30 15ZM3.75 26.25C1.65 26.25 0 27.9 0 30C0 32.1 1.65 33.75 3.75 33.75C5.85 33.75 7.5 32.1 7.5 30C7.5 27.9 5.85 26.25 3.75 26.25ZM56.25 26.25C54.15 26.25 52.5 27.9 52.5 30C52.5 32.1 54.15 33.75 56.25 33.75C58.35 33.75 60 32.1 60 30C60 27.9 58.35 26.25 56.25 26.25ZM11.25 45C9.15 45 7.5 46.65 7.5 48.75C7.5 50.85 9.15 52.5 11.25 52.5C13.35 52.5 15 50.85 15 48.75C15 46.65 13.35 45 11.25 45ZM48.75 45C46.65 45 45 46.65 45 48.75C45 50.85 46.65 52.5 48.75 52.5C50.85 52.5 52.5 50.85 52.5 48.75C52.5 46.65 50.85 45 48.75 45ZM30 52.5C27.9 52.5 26.25 54.15 26.25 56.25C26.25 58.35 27.9 60 30 60C32.1 60 33.75 58.35 33.75 56.25C33.75 54.15 32.1 52.5 30 52.5Z")
        $(" path").attr("fill", "white")

        // Đổi màu chữ ở contact fragment 
        $(".homepage .contact a").css("color", "white");
        $(".navbar-brand > img").attr("src", "./assets/images/logo-footer.png")
        $("#feedback").css("background-image", "url('./assets/images/feedback-dark.png')");
    }
})

$('.list-sort').attr('colspan', function(index, attr){
    return attr == 6 ? null : 6;
});
// Đổi màu icon theme khi hover
// if ($("#theme-icon path").attr("fill") == "black") {
//     $("#theme-icon").hover(function (){
//         $("#theme-icon path").attr("fill", function(index, attr){
//             return attr === "blue" ? "black" : "blue";
//         })
//     })
// }
// else {
//     $("#theme-icon").hover(function (){
//         $("#theme-icon path").attr("fill", function(index, attr){
//             return attr === "blue" ? "white" : "blue";
//         })
//     })
// }
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
    } else {
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

// Bỏ dấu Tiếng Việt
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
}