
const menuBtn = document.getElementById('menu-btn')
const sideNav = document.getElementById('side-nav')
const menu = document.getElementById('menu')

sideNav.style.right = '-250px';

menuBtn.addEventListener('click', menuExtend)

function menuExtend() {
	if (sideNav.style.right == '-250px') {
		sideNav.style.right = '0';
		menu.src = 'img/close.png'
	} else {
		sideNav.style.right = '-250px';
		menu.src = 'img/menu.png'
	}
}

// Preloader

const loader = document.getElementById('preloader')

/* window.addEventListener('load', function(){
  loader.style.display = 'none'
}) */

setTimeout(function(){
  loader.style.display = 'none'
}, 4000)
