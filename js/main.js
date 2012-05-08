

var parseMyForm = function(data){
	//use form data here:
	console.log(data);
};

$(document).ready(function(){
	var p3form = $('#myform');
	p3form.validate({
		invalidHandler: function(form, validator){},
		submithandler:	function(){
			 var data = p3form.serializeArray();
			 parseMyForm(data);
		}
		
	});
	
	$("#submit")
			.after("<input type='submit' value='Save Form' id='saveData'>");
	$("#saveData")
			.click(function(e) {
			//prevent default of submitting form
				e.preventDefault();
				localStorage.setItem("flag", "set");
				var data = $("#myform").serializeArray();
				$.each(data, function(i, obj) {
				     localStorage.setItem(obj.name, obj.value);
				
			});
	 });
	 
	 if(localStorage.getItem("flag") == "set") {
	 	$("header").before("<p>Your data has been saved</p>");
	 	var data = $("#myform").serializeArray();
				$.each(data, function(i, obj) {
				   $("[name='" + obj.name 			 								+"']").val(localStorage.getItem(obj.name));
				
			});
	 
	 }
				
});



		


	