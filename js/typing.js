$(document).ready(function () {

	$(document).bind('keyup', onKeyUp);
	
	function onKeyUp(evt) {
		$('#current_input').html(String.fromCharCode(evt.keyCode));
				
		clearText();
		
		var txt = $('#code_txt').html();
		var divTxt = $('#main_div');

		$('#main_div').html(txt);
		
		
		console.log('code_txt', txt);
	}
	
	function clearText() {
	    var divMain = $('#main_div');
	    var spans =$('#main_div > span');
	    while (spans.length > 0) {
	        divMain.removeChild(spans[0]);
	    }
	}

});