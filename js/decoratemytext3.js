/*window.onload = function() {
	alert("Hello, world!");
}*/

window.onload = function() {
	var largeButton = document.getElementById("button1");
	largeButton.onclick = largeButtonClick;
	var PigLatin = document.getElementById("PigLatin");
	PigLatin.onclick = PigLatinonClick;
	var checkBox1 = document.getElementById("checkbox1");
	checkBox1.onclick = checkBoxClick;
};
function largeButtonClick() {
	var string = document.getElementById("areaID").value;
	var returnvalue=" ";
	var words = string.split(" ");
	for(let i=0; i< words.length;i++){
		if(words[i].length>=5){
			words[i]="Malkovich";
		}
		returnvalue=returnvalue+" "+words[i];
	}
	document.getElementById("areaID").value=returnvalue;

}

function PigLatinonClick(){
	
	
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