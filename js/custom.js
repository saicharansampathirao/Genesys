// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();
// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}
/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  });
  // Get elements
const menuToggle = document.querySelector('.menu-toggle');
const popupNav = document.querySelector('.popup-nav');

// Toggle popup visibility
menuToggle.addEventListener('click', () => {
  popupNav.classList.toggle('d-none');
});

// Close popup on clicking a menu item
popupNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    popupNav.classList.add('d-none');
  }
});


