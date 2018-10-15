'use strict';
list.addEventListener('click', counterCart);

function counterCart(event) {
	if ((event.target.tagName === 'A') && (event.target.classList.contains('add-to-cart'))) {
		event.preventDefault();
		addToCart(event.target.dataset.item);	
	};	
}