function pingpong() {
	// Ensure that user input is an integer > 1 and a whole number.
	do {
	var input = prompt("Let's play Ping-Pong!  Please enter a whole number that is greater than 1:");
	} while ((isNaN(+input)) || +input % 1 !== 0 || +input <= 1);

	// Create new Array
	var number = new Array();
	for (i = 1; i <= +input; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
			number.push(' ping-pong ');
		}
		else if (i % 3 == 0) {
			number.push(' ping ');
		}
		else if (i % 5 == 0) {
			number.push(' pong ');
		}
		else
			number.push(' ' + i + ' ');
	};
	document.write(number + ' .');
};

// Call the function
pingpong();