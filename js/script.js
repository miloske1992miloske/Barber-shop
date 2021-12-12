
var menuBtn = document.getElementById('menu-btn')
var sideNav = document.getElementById('side-nav')
var menu = document.getElementById('menu')

sideNav.style.right = '-250px';

menuBtn.onclick = function() {
	if (sideNav.style.right == '-250px') {
		sideNav.style.right = '0';
		menu.src = 'img/close.png'
	} else {
		sideNav.style.right = '-250px';
		menu.src = 'img/menu.png'
	}
}


// Smooth Scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

