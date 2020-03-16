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


