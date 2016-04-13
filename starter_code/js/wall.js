$(document).ready(function()
{
	$('#message').focus();
	// YOUR CODE GOES HERE
	$("body").append("<div id='pfpmanager'></div>")
	$("button").click(function(){
		
		$("#pfpmanager").prepend("<li><img class='pfpicture' src='http://www.natandmarie.com/wp-content/uploads/2013/06/rsz_facebook.jpg'/>"+$("#message").val()+"</li>");
			$(".pfpicture").css("length","168px");
			$(".pfpicture").css("width","168px");
		var deleteInput = $("#message").attr();
			if(deleteInput.length > 0)
				deleteInput === "";
	});
});


