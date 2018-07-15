/* eslint-env jquery */
/* eslint-env browser */

// Get pathname and each nav item
const page = window.location.href;
const navItems = document.querySelectorAll('.jumbotron nav li a');

// Loop through the pages to highlight current page in nav
if (page.indexOf('index') > -1) {
  navItems[0].style.color = '#26C485';
} else if (page.indexOf('tracks') > -1) {
  navItems[1].style.color = '#26C485';
} else if (page.indexOf('leasing') > -1) {
  navItems[2].style.color = '#26C485';
} else if (page.indexOf('contact') > -1) {
  navItems[3].style.color = '#26C485';
} else if (page.indexOf('privacy-policy') > -1) {
  // do nothing
} else {
  navItems[0].style.color = '#26C485';
}

// jQuery to activate popovers
$('#contactBtn').on('click', () => {
  $('[data-toggle=contact]').popover();
});

$('#bPurchase').on('click', () => {
  $('[data-toggle=basic-purchase]').popover();
});

$('#pPurchase').on('click', () => {
  $('[data-toggle=premium-purchase]').popover();
});

$('#ePurchase').on('click', () => {
  $('[data-toggle=exclusive-purchase]').popover();
});
