$(document).ready(function(){
	
	$('#shufflebutton').click(shufflebutton);
	    var divs = $('#puzzlearea div');;
	    // initialize each piece
	    init();
	    
	    function init(){
	    	 var divs = $('#puzzlearea div');;
	 	    // initialize each piece
	 	    for (var i=0; i< divs.length; i++) {
	 	        var div = divs[i];
	 	        
	 	        // calculate x and y for this piece
	 	        var x = ((i % 4) * 100) ;
	 	        var y = (Math.floor(i / 4) * 100) ;

	 	        // set basic style and background
	 	        div.className = "puzzlepiece";
	 	        div.style.left = x + 'px';
	 	        div.style.top = y + 'px';
	 	        div.style.backgroundImage = 'url("image/backgroundpuzzle.jpg")';
	 	        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
	 	        
	 	        // store x and y for later
	 	        div.x = x;
	 	        div.y = y; 
	 	    }
	 	    
	    }
	    function shufflebutton(){
	    	
	    	
	    	 var divs = $('#puzzlearea div');;
	 	    // initialize each piece
	 	   // for (var i=0; i< divs.length; i++) {
	 	        var div = divs[0];
	 	        
	 	        // calculate x and y for this piece
	 	        var x = ((0 % 4) * 100) ;
	 	        var y = (Math.floor(0 / 4) * 100) ;

	 	        // set basic style and background
	 	        div.className = "puzzlepiece";
	 	        div.style.left = x + 'px';
	 	        div.style.top = y + 'px';
	 	        div.style.backgroundImage = 'url("image/backgroundpuzzle.jpg")';
	 	        
	 	        div.style.backgroundPosition = 300 + 'px ' + 0 + 'px';
	 	        
	 	        // store x and y for later
	 	        div.x = x;
	 	        div.y = y; 
	 	        
	 	   // }
	 	    
	    }
	
});



