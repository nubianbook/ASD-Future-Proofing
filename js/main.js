//Title: main.js
//Visual Frameworks
//Project 4 Web-App Part 4
//Carol Gaylor
//Feb.23,2012




// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
   //alert(localStorage.length);
   
//Variable defaults
	var movCategory = ["--Choose Category--",					
					   "SciFi", "Drama", "Horror", "Comedy", "Family",  "Romance", "Documentary"],
	    acquiredValue = "No",
	    viewedValue,
	    watchValue,
	    rateValue,
	    dataValue,
	    giftValue,
	    downloadValue = "No",
	    oneValue = "No",
	    twoValue = "No",
	  	notWatchValue = "No",
	  	notseeValue = "No",
	  	purchaseValue = "No",
	  	errMsg = w('errors')
    ;


// getElementbyID Function
	function w(x){
		var theElement = document.getElementById(x);  // $('#x')
		return theElement;
	}
	
	
	
//I am creating field elements to populate with options
	function makeCats() {
		var selectOption = $('#categories');
		console.log(selectOption);
		for(var i=0, j=movCategory.length; i<j; i++) {
			var makeOption = $('<option></option>');
			var optText = movCategory[i];
			makeOption.attr("value", optText); 
			makeOption.html(optText); 
			selectOption.append(makeOption);
	    }		
	}
	
/* Find Value of selected Values for each
	radio or checkbox */
	
	function getSelectedRadioA() {
			var radioA = $('#myform').acquired;
			for(var i=0; i<radioA.length; i++) {
				if(radioA[i].checked) {
					acquiredValue = radioA[i].value;
	    }
	}								
}

	

	function getSelectedRadioB() {
			var radioB = $('#myform').viewed;
			for(var i=0; i<radioB.length; i++) {
				if(radioB[i].checked) {
					viewedValue = radioB[i].value;
	    }
	}								
}

	

	function getSelectedRadioC() {
			var radioC = $('#myform').watch;
			for(var i=0; i<radioC.length; i++) {
				if(radioC[i].checked) {
					watchValue = radioC[i].value;
	    }
	}								
}

	

	function getSelectedRadioD() {
			var radioD = $('#myform').rate;
			for(var i=0; i<radioD.length; i++) {
				if(radioD[i].checked) {
					rateValue = radioD[i].value;
	    }
	}								
}

	
	function getCheckboxValueA() {
			if($('$yes').checked) {
					downloadValue = $('$yes').value;
				} 	
				  else {	
						downloadValue = "No";
		}
}

	function getCheckboxValueB() {
			if($('$no').checked) {
					giftValue = $('$no').value;
				} 	
				  else {	
						giftValue = "No";
		}
}


		
	function toggleControls(n) {
			switch(n) {
					case "on":
					w("innerForm").style.display = "none";
					w('clearData').style.display = "inline";
					w('displayData').style.display = "none";
					w('addNew').style.display = "inline";
					 break;
				   case "off":
				    w("innerForm").style.display = "inline";
					w('clearData').style.display = "inline";
					w('displayData').style.display = "inline";
					w('addNew').style.display = "none";
					w('items').style.display = "none";
				        break;
				      default:
				 return false;
			}
	}
	     
//Setting up my data for the Local Storage
	function storeData(key) {
		if(!key) {
			var id          = Math.floor(Math.random()*1000000001);
		} else {
			    id = key;
		}
		getSelectedRadioA();
		getSelectedRadioB();
		getSelectedRadioC();
		getSelectedRadioD();
		getCheckboxValueA();
		getCheckboxValueB();
			var item        = {};
			item.groups       = ["Category: ", $('#groups').value];
			item.atitle       = ["Title: ", $('#movName').value];
			item.watched      = ["Watched: ",$('#sawName').value];
		 	item.checkbox1    = ["Download: ", downloadValue];
			item.checkbox2    = ["Gift: ", giftValue];
			item.acquired     = ["Movie was? ", acquiredValue];
			item.viewed       = ["First time watched: ", viewedValue];
			item.watch        = ["Watch again: ", watchValue];
			item.ratestars    = ["Rate stars: ", rateValue];
			item.slider       = ["Slider: ", $('#range-slider').value];
			item.notes        = ["Notes: ", $('#noteName').value];
		localStorage.setItem(id, JSON.stringify(item)); 
		alert("Contact Saved!");	
	}
	$("#categories option").eq(2).prop("selected", true);
	$("#movName").val("I'm testing to see If jquery works");
	$("#sawName").val("05-01-2012, testing");
	$("#noteName").val("Testing the jquery syntax");
	
	//Write Data from local storage to the browser.
	
	function getData() {
			toggleControls("on");
			if(localStorage.length === 0) {
				 alert("There is no data in Local Storage so default data was added.");
				 autoFillData();
			}
	 		var makeDiv = document.createElement('div');
	 		makeDiv.setAttribute("id", "items");
	 		var makeList = document.createElement('ul');
	 		makeDiv.appendChild(makeList);
	 		document.body.appendChild(makeDiv);
	 		w('items').style.display = "block";
	 		for(var i=0, j=localStorage.length; i<j; i++) {
	 			var makeli = document.createElement('li');
	 			var linksLi = document.createElement('li');
	 			makeList.appendChild(makeli);
	 			var key = localStorage.key(i);
	 			var value = localStorage.getItem(key);
	 			var obj = JSON.parse(value);         //obj string conversion from string to opject
	 			var makeSubList = document.createElement('ul');
	 			makeli.appendChild(makeSubList);
	 			getImage(obj.groups[1], makeSubList);
	 			for(var n in obj) {
	 				var makeSubLi = document.createElement('li');
	 				makeSubList.appendChild(makeSubLi);
	 				var optSubText = obj[n][0]+""+obj[n][1];
	 				makeSubLi.innerHTML = optSubText;
	 				makeSubList.appendChild(linksLi);
	 		}
	 		makeItemLinks(localStorage.key(i), linksLi);//Create our edit and delete buttons/link for each item in local storage.
	 	}
	}
	
	function getImage(imgName, makeSubList) {
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ imgName + ".png");
		imageLi.appendChild(newImg);
		
	}
	
	function autoFillData() {
		for(var n in json) {
			var id = Math.floor(Math.random()*1000000001);
			localStorage.setItem(id, JSON.stringify(json[n])); 
		}
	}
	//Make item Links
	//Create the edit and delete links for eack stored item when displayed.
	function makeItemLinks(key, linksLi) {
		var editLink = document.createElement('a'); 
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Info";		
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete";
		deleteLink.addEventListener('click', deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	function editItem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		toggleControls("off");
		
		
		$('#groups').value = item.groups[1];
		$('#movName').value = item.atitle[1];
		$('#sawName').value = item.watched[1];
		
		var radioA = document.forms[0].acquired;
		for(var i=0; i<radioA.length; i++) {
			if(radioA[i].value == "Acquired" && item.acquired[1] == "Acquired") {
				radioA[i].attr("checked", "checked");
			} else if(radioA[i].value == "Purchased" && item.acquired[1] == "Purchased"){
			 	radioA[i].attr("checked", "checked");
				     	
				}
			
			}
			var radioB = document.forms[0].viewed;
			for(var i=0; i<radioB.length; i++) {
				if(radioB[i].value == "Viewed" && item.viewed[1] == "Viewed") {
					radioB[i].attr("checked", "checked");
				} else if(radioB[i].value == "No" && item.viewed[1] == "No"){
				 	radioB[i].attr("checked", "checked");
					     	
				}
			
		}
			var radioC = document.forms[0].watch;
			for(var i=0; i<radioC.length; i++) {
				if(radioC[i].value == "Watch" && item.watch[1] == "Watch") {
					radioC[i].attr("checked", "checked");
				} else if(radioC[i].value == "No" && item.watch[1] == "No"){
				 	radioC[i].attr("checked", "checked");
					     	
				}
			
		}
			var radioD = document.forms[0].rate;
			for(var i=0; i<radioD.length; i++) {
				if(radioD[i].value == "Stars" && item.rate[1] == "Stars") {
					radioD[i].attr("checked", "checked");
				} else if(radioD[i].value == "PickStar" && item.rate[1] == "PickStar"){
				 	radioD[i].attr("checked", "checked");
					     	
				}
			
		}
				if(item.checkbox1[1] = "download"){
			$('#yes').attr("checked", "checked");
	}
				if(item.checkbox2[1] = "gift"){
			$('#yes').attr("checked", "checked");
	}
	
			if(item.viewed[1] = "yes"){
			$('#yes').attr("checked", "checked");
	}
					
			$('#range-slider').value = item.slider[1];
			$('#noteName').value = item.notes[1];
			
			submitBtn.removeEventListener('click', storeData);
			
			$('#submit').value = "Edit Info";
			var editSubmit = $("#submit");
			editSubmit.addEventListener("click", validate);
			editSubmit.key = this.key;
	}
	
		function deleteItem() {
			var ask = confirm("Are you sure you want to delete this info?");
			if(ask) {
				localStorage.removeItem(this.key);
				alert("Info was deleted.");
				window.location.reload();
			} else {
				alert("Info was NOT deleted.");
			}
		}	
				
	
		function clearLocal() {
			if(localStorage.length === 0) {
			    alert("There is no data to clear.");
			    } else 
			    	   {
			    	   	 localStorage.clear();
			    	   	 alert("All contacts are deleted!");
			    	   	 window.location.reload();
			    	   	 return false;
			}
	}

		function validate(e) {
			var getGroups   = $('#groups');
			var getAtitle   = $('#movName');
			var getWatched  = $('#sawName');
			
			errMsg.innerHTML = "";
			getGroups.style.border = "1px solid black";
			getAtitle.style.border = "1px solid black";
			getWatched.style.border = "1px solid black";
			
			var messageAry = [];
			
			if(getGroups.value === "--Choose Category--") {
				var groupError = "Please select a category.";
				getGroups.style.border = "1px solid red";
				messageAry.push(groupError); 
				
			}
			
			if(getAtitle.value === "") {
				var aTitleError = "Please enter a title.";
				getAtitle.style.border = "1px solid red";
				messageAry.push(aTitleError);		
			 }
			 
			 if(getWatched.value === "") {
				var watchError = "Please enter a date.";
				getWatched.style.border = "1px solid red";
				messageAry.push(watchError);		
			 }
		 
		 //I didn't have an email validation but incase if I decide to add on later

		/*var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+w/;
		 if(!(re.exec(getEmail.value))) {
		 	var emailError = "Please enter a valid email address.";
		 	getEmail.style.border = "1px solid red";
		 	messageAry.push(emailError);
		 } */
		 
		 if(messageAry.length >= 1) {
		 	for(var i=0, j=messageAry.length; i < j; i++) {
		 		var txt = document.createElement('li');
		 		txt.innerHTML = messageAry[i];
		 		errMsg.appendChild(txt);
		   }	
		     e.preventDefault();
		     return false;	
	   } else {
	   			storeData(this.key);
	   }
	   
	}
	
 	makeCats();
 	console.log("Make Cats ran");	
		
	//Set link & Submit Click Events
	
	var displayData = w('displayData');
	displayData.addEventListener("click", getData);
	var clearData = w('clearData');
	clearData.addEventListener("click", clearLocal);
	var submitBtn = w('submit');
	submitBtn.addEventListener('click', validate);
	
});

var fieldColor_1 = function() {
		var field = document.getElementById("movName");
			field.style.backgroundColor = "#dce5ea";

};

var fieldColor_3 = function() {
		var field = document.getElementById("sawName");
			field.style.backgroundColor = "#dce5ea";

};
var fieldColor_4 = function() {
		var field = document.getElementById("noteName");
			field.style.backgroundColor = "#dce5ea";

};

var parseMyForm = function(data){
	//use form data here:
	console.log(data);
};





