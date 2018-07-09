window.addEventListener('load', function() {
	var newsletterForm = document.querySelector('.footer-newsletter-form');
	newsletterForm.onsubmit = valida;

	var inputEmail = document.querySelector('.footer-newsletter-input');
	inputEmail.onfocus = function() {
		var prerender = document.createElement('link');
		prerender.rel = 'prerender';
		prerender.href = 'cadastrado.html';
		document.head.appendChild(prerender);
	}

	function valida() {
		var isValid = true;
		var inputEmail = document.querySelector('.footer-newsletter-input');
		isValid = validaEmail(inputEmail.value);

		if(!isValid) {
			inputEmail.classList.add('form-erro');
			document.querySelector('.footer-newsletter-button').classList.add('form-erro');
		}

		return isValid;
	}

	function validaEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
	}

});
