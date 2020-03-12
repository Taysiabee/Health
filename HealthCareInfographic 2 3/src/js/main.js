window.onload = function() {
	var testWaypoint = new Waypoint({
		element: document.querySelector('.america-spends'),
		handler: function(direction) {
			console.log('bottom')
	  },
	  offset: 'bottom-in-view'
	});

	var maoneyPileWaypoint = new Waypoint({
		element: document.querySelector('.america-spends'),
		handler: function(direction) {
			document.querySelector(".uk-money-stack-1").classList.add("uk-drops1");
			document.querySelector(".uk-money-stack-2").classList.add("uk-drops2");
			document.querySelector(".us-money-stack-1").classList.add("us-drops1");
			document.querySelector(".us-money-stack-2").classList.add("us-drops2");
			document.querySelector(".us-money-stack-3").classList.add("us-drops3");
			document.querySelector(".us-money-stack-4").classList.add("us-drops4");


	  },
	  offset: 'bottom-in-view'
	});
}






















var elem = document.querySelector('.pill-one');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem2 = document.querySelector('.pill-two');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem2.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem3 = document.querySelector('.pill-three');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem3.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem4 = document.querySelector('.pill-four');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem4.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});


var elem5 = document.querySelector('.second-pill-one');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem5.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem6 = document.querySelector('.second-pill-two');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem6.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem7 = document.querySelector('.second-pill-three');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem7.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem8 = document.querySelector('.second-pill-four');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem8.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});