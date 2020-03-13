$(document).ready(function(){
	var win =true;
	$('#start').click(reset);
	$('#maze .boundary').mouseover(red);
	$('#end').mouseover(end);
	

	
	function reset(){
		win=true;
		$("#status h2").remove();
		$('#maze .boundary').css("background-color", "#eeeeee");
		
	}	
	function red(){
		$(this).css("background-color","#ff8888");
		win=false;
		
	}
	function end(){
		var status;
		$("#status h2").remove();
		if(win==false){
		status = "<h2>Sorry ,you lost</h2>";
		//alert("Sorry ,you lost");
		}
		else 
			{
			status = "<h2>You win</h2>";
		//alert("You win");
			}
		$("#status").append(status);
	}
	
	
	
});