$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    },
    dots: false,
    navContainer: "#testimonialNav"
})


// navbar sticky header
// window.onscroll = function () {
//     myFunction()
// };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }


// section active class when window scrool js
$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navbarSupportedContent a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbarSupportedContent ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}