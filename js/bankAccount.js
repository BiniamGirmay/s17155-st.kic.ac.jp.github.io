/*window.onload = function() {
	alert("Hello, world!");
}*/

window.onload = function() {
	var createAccountbtn = document.getElementById("createAccount");
	createAccountbtn.onclick = createAccount;
	//var checkBox1 = document.getElementById("checkbox1");
	//checkBox1.onclick = checkBoxClick;
	
	
};

var AccountList=[];

function Account(accountType,deposit){
	this.accountType=accountType;
	this.deposit=deposit;
}
function createAccount() {
	
	var txt="";
	var accountType=document.getElementById("accountType").value;
	var deposit=document.getElementById("deposit").value;
	
	if (isNaN(deposit)){
		alert("Invalid Input, Enter number of Deposit!")
		
	}else {
	var account= new Account(accountType,deposit);
	AccountList.push(account);
	AccountList.forEach(myFunction);
	
	function myFunction(value, index, array) {
		  txt = txt +"Account Name :  " + array[index].accountType +" Deposit:   " 
		  +array[index].deposit+ "\n"; 
		  document.getElementById("areaID").innerHTML = txt;
		}
	
	}
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