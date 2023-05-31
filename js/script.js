window.addEventListener('DOMCoıntentLoaded', event => {
	
const sideNav= document.body.querySelector('#sideNav');
if(sideNav){
	new bootstrao.ScrollSpy(document.body,

	{


target:'#sideNav',
offset:74,


	});

};

const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
	document.querySelectorAll('#navbarResponsive .nav-link'));

	responsiveNavItems.map(function(responsiveNavItem){
		responsiveNavItems.addEventListener('click', () => {
			if(window.getComputedStyle(navbarToggler).display !== 'none'){
				navbarToggler.click();
			}
		});
	});


});