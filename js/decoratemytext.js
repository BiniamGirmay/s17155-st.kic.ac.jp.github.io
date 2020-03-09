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
	document.getElementById("areaID").style.fontSize = "24pt";
	alert("Hello, world!");
}
function checkBoxClick() {
	var checkBox1 = document.getElementById("checkbox1");
	if (checkBox1.checked == true) {
		document.getElementById("areaID").style.fontWeight = "bold";
		document.getElementById("areaID").style.color = "green";
		document.getElementById("areaID").style.textDecoration = "underline";

	} else {
		document.getElementById("areaID").style.fontWeight = "normal";
		document.getElementById("areaID").style.color = "black";
		document.getElementById("areaID").style.textDecoration = "none";

	}

}