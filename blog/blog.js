let BlogJS = new __cBill_waitForDojo('BlogJS'); 
BlogJS.do(function () { 
	
		/* Recherche de la balise */ 
		console.debug(dojo.query("div[style='border-top: 2px solid black;height:45px;']"));

		/* Suppression de la ligne noire */
		dojo.query("div[style='border-top: 2px solid black;height:45px;']").style("border-top","0px solid black");
	
		/* Recherche de la balise */    
		console.debug(dojo.query("ul[class='inlinelist lotusInlinelist']"));
	
		var list = document.getElementsByClassName("inlinelist lotusInlinelist")[0].getElementsByTagName("LI");
	
		for (n=0; n <= dojo.query("ul[class='inlinelist lotusInlinelist']").length; n++) {
			  dojo.place("<div class='lotusActionBar lotusBtnContainer aria_toolbar' role='toolbar' style='float:none' aria-label='Actions de blogue'>" + 
				 "<span class='lotusBtn lotusLeft'>" +
				 list[0].innerHTML + 
				 "</span>" +
				 "<span class='lotusBtn lotusLeft'>" +
				 list[1].innerHTML +
				 "</span>" +
				 "<span class='lotusBtn lotusLeft'>" +
				 list[2].innerHTML +
				 "</span>" +
				 "</div>", dojo.query(".inlinelist")[n],"replace");
		}
	
	}
	  
)
