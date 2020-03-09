/*window.onload = function() {
	alert("Hello, world!");
}*/

window.onload = function() {
	var largeButton = document.getElementById("button1");
	largeButton.onclick = largeButtonClick;
	var checkBox1 = document.getElementById("checkbox1");
	checkBox1.onclick = checkBoxClick;
};
function largeButtonClick() {
	setInterval(changeStyel, 500);
}
function changeStyel(){
	var size = parseInt(document.getElementById("areaID").style.fontSize);
	size += 12; 
    document.getElementById("areaID").style.fontSize = size+ "pt";
	alert("Hello, world!");
	
	
}
function checkBoxClick() {
	var checkBox1 = document.getElementById("checkbox1");
	 if (checkBox1.checked == true){
		document.getElementById("areaID").style.fontWeight = "bold";
		document.getElementById("areaID").style.color = "green";
		document.getElementById("areaID").style.textDecoration = "underline";
		document.body.style.backgroundImage = "url('image/hundred-dollar-bill.jpg')";
		
		
	} else {
		document.getElementById("areaID").style.fontWeight = "normal";
		document.getElementById("areaID").style.color = "black";
		document.getElementById("areaID").style.textDecoration = "none";
		document.body.style.backgroundImage = "url('')";
		
	}

}