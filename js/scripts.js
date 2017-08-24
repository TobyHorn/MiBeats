let page = window.location.pathname;
const navItems = document.querySelectorAll('.jumbotron nav li a');


if (page === "/index.html") {
    navItems[0].style.color = '#26C485';
} else if (page === "/pages/tracks.html") {
    navItems[1].style.color = '#26C485';
} else if (page === "/pages/leasing.html") {
    navItems[2].style.color = '#26C485';
} else if (page === "/pages/contact.html") {
    navItems[3].style.color = '#26C485';
} else if (page === "/pages/privacy-policy.html") {
    //do nothing
} else {
    navItems[0].style.color = '#26C485';
}

$(function () {
    $('[data-toggle="contact"]').popover();
})

$(function () {
    $('[data-toggle="basic-purchase"]').popover();
})

$(function () {
    $('[data-toggle="premium-purchase"]').popover();
})

$(function () {
    $('[data-toggle="exclusive-purchase"]').popover();
})