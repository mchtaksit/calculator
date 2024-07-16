document.addEventListener("DOMContentLoaded", function () {
	const display = document.getElementById('display');
	const buttons = document.querySelectorAll('.btn');
	const equalsButton = document.querySelector('.big-btn');

	buttons.forEach(button => {
		button.addEventListener('click', function () {
			const value = button.textContent;

			if (value === "AC") {
				display.value = "";
			} else if (value === "DE") {
				display.value = display.value.slice(0, -1);
			} else {
				display.value += value;
			}
		});
	});

	equalsButton.addEventListener('click', function () {
		try {
			display.value = eval(display.value);
		} catch {
			display.value = "Error";
		}
	});
});
