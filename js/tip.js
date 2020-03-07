function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
	var subtotal = subtotalElem.value
	var tip = tipElem.value
	
	tip=tip/100;
	var total = (tip * subtotal);
	total = Math.round(total * 100) / 100;
	  //next line allows us to always have two digits after decimal point
	  total = total.toFixed(2);
	  //Display the tip
	
	totalElem.innerHTML = '$' + total;
	
		

}
function clickMe() {
	var clickedMe = document.getElementById('clickedMe');
	clickedMe.innerHTML = 'You Clicked Me';
	alert('You Clicked Me')
}

function gogogo1() {
	alert("Yay, it works!");
}

function somethingElse() {
	if (5 > 2) {
		alert("Bigger");
	}
	if (5 < 2) {
		alert("Smaller");
	}
}
