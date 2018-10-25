// x uses power of "this" keyword to retrive current element
function color(x) {
	let colors = ['red', 'green', 'blue', 'gray'];
	x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}



function blocks() {
	let frame = document.getElementById('frame');

	//removes previously made grid if there is one
	let child = frame.firstChild;
	while (child) {
		frame.removeChild(child);
		child = frame.firstChild;
	}
	let number = prompt('Number of squares');
	//checks for number of columns for appropriate matrix
	let columns = '';


	for (let j = 0; j < number; j++) {
		columns += 'auto ';
	}

	//makes matrix in sqauare shape,which is reason for number times number
	for (let i = 0; i < number * number; i++) {
		let square = document.createElement('div');
		square.classList.add('paint' + i);
		square.setAttribute('onmouseover', 'color(this)');
		square.style.backgroundColor = 'white';
		square.style.margin = 'auto';
		square.style.height = '100%';
		square.style.width = '100%';
		square.style.border = '.1px solid black';

		frame.appendChild(square);

	}
	frame.style.gridTemplateColumns = columns;


}
