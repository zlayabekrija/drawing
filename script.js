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
		//square.style.margin = 'auto';
		square.style.height = '100%';
		square.style.width = '100%';
		square.style.border = '.1px solid black';

		frame.appendChild(square);

	}
	frame.style.gridTemplateColumns = columns;


}

function white() {
	//resets the grid bringing everything to white
	//variable bricks is taking every item from grid an reseting it to white
	let bricks = document.querySelectorAll("[class^=paint]");
	for (let n = 0; n < bricks.length; n++) {
		bricks[n].style.backgroundColor = 'white';
	}


}

function black() {
	let getDivs = document.querySelectorAll("[class^=paint]");
	for (let m = 0; m < getDivs.length; m++) {
		getDivs[m].setAttribute('onmouseover', 'mono(this)');
	}

}

function mono(f) {
	f.style.backgroundColor = 'black';
}

function rainbow() {
	let divs = document.querySelectorAll("[class^=paint]");
	for (let z = 0; z < divs.length; z++) {
		divs[z].setAttribute('onmouseover', 'color(this)');
	}
}

function erase() {
	
	let setDivs = document.querySelectorAll("[class^=paint]");
	
	for (let a = 0; a < setDivs.length; a++) {
		setDivs[a].setAttribute('onmouseover', 'simple(this)');
	}
}

function simple(b) {
	b.style.backgroundColor = 'white';
}
