// x uses power of "this" keyword to retrive current element
function color(x) {
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);
	let alpha = Math.random().toFixed(2);
	x.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;

}


// function that makes grids when invoked
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
//resets the grid bringing everything to white
//variable bricks is taking every item from grid an reseting it to white
function white() {

	let bricks = document.querySelectorAll("[class^=paint]");
	for (let n = 0; n < bricks.length; n++) {
		bricks[n].style.backgroundColor = 'white';
	}


}
//setting sqare to onmouseover function to function mono
function black() {
	let getDivs = document.querySelectorAll("[class^=paint]");
	document.getElementById("frame").style.cursor = "url('http://www.rw-designer.com/cursor-extern.php?id=53662'),default";
	for (let m = 0; m < getDivs.length; m++) {
		getDivs[m].setAttribute('onmouseover', 'mono(this)');
	}

}
//changing active square color to black
function mono(f) {
	f.style.backgroundColor = 'black';

}
//function that changes back to random colors if any
function rainbow() {
	let divs = document.querySelectorAll("[class^=paint]");
	document.getElementById("frame").style.cursor = "url('http://www.rw-designer.com/cursor-extern.php?id=67869'),default";
	for (let z = 0; z < divs.length; z++) {
		divs[z].setAttribute('onmouseover', 'color(this)');
	}
}
//function that adds onmouseover event to squares
function erase() {
	let setDivs = document.querySelectorAll("[class^=paint]");
	document.getElementById("frame").style.cursor = "url('http://www.rw-designer.com/cursor-extern.php?id=72976'),default";
	for (let a = 0; a < setDivs.length; a++) {
		setDivs[a].setAttribute('onmouseover', 'simple(this)');
	}
}
//function that resets all blocks to white
function simple(b) {
	b.style.backgroundColor = 'white';

}
