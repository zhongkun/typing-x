$(document).ready(function () {

	$(document).bind('keyup', onKeyUp);
    var inputStr = "";

    function onKeyUp(evt) {
	$('#current_input').html(String.fromCharCode(evt.keyCode));
	
	clearText();
	inputStr = inputStr + String.fromCharCode(evt.keyCode);
	var divTxt = $('#code_txt').html();
	//var divTxt = $('#main_div').innerHTML;
	// $('#main_div').html(txt);
	var top = 18;
        var left = 0;
        var error = 0;
        var lost = 0;
	var spanObj = null;
	var lost = 0;
	console.log('divText', divTxt);
	console.log('inputStr', inputStr);
	for (var i = 0; i < divTxt.length; i++) {
	    if (i >= inputStr.length + lost) {
		break
	    }

	    var color = 'green';
	    if (spanObj && spanObj.color != color) {
		addSpan(spanObj);
		spanObj = null;
	    }

            if (divTxt.charAt(i) == '\n') {
                top += 60;
                left = 0;
                addSpan(spanObj);
                spanObj = null;
            }
	    
	    if (divTxt.charAt(i) == '\r') {
		continue;
	    }
	    
	    var charWidth = divTxt.charCodeAt(i) > 255 ? 24 : 13;
	    if (!spanObj) {
		spanObj = new Object();
		spanObj.top = top;
		spanObj.left = left;
		spanObj.color = color;
		spanObj.height = 24;
		spanObj.width = charWidth;
	    console.log('color', color);

	    } else {
		spanObj.width += charWidth;
	    }
	    
	    left += charWidth;
	    if (left > 780 - charWidth) {
		top += 60;
		left = 0;
		addSpan(spanObj);
		spanObj = null;
		if (divTxt.charAt(i + 1) == ' ' || divTxt.charAt(i + 1) == '\n') {
                    i++;
                    lost++;
                }

	    }
	}

	if (spanObj){
	    addSpan(spanObj);
	    spanObj = null;
	}
	

	}
	
	function clearText() {
	    var divMain = $('#code_txt');
	    var spans =$('#code_txt > span');

	    // if (spans.length > 0) {
	    // 	console.log('spans', spans);
	    // 	console.log('kkkk', '\n');
	    // 	spans[0].remove();
	    // 	console.log('spans', spans);
	    // }
	    spans.remove();
	    // console.log('s', spans.length);
	    // while (spans.length > 0) {
	    // 	console.log('s', spans.length);
		
	    //     spans[0].remove();
	    // 	spans.pop();
	    //  }
	}

       function addSpan(spanObj) {
           if (!spanObj) {
               return;
           }
           var span = document.createElement('span');
           span.style.position = 'absolute';
           span.style.width = spanObj.width + 'px';
           span.style.height = spanObj.height + 'px';
           span.style.top = spanObj.top + 'px';
           span.style.left = spanObj.left + 'px';
           span.style.zIndex = 1;
           span.style.backgroundColor = spanObj.color;
           $('#code_txt').append(span);
       }

});
