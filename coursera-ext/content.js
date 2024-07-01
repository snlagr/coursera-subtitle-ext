let subOn = true;
// trigger whenever a key is pressed
document.onkeypress = function(e) {

    if(e.key == 'c' || e.key == 'C') {

	// grab all subtitles
	subList = document.getElementsByClassName("subtitle-label");

	// find out engSubs and noSubs
	for (i=0; i<subList.length; i++) {
	    if(subList[i].innerHTML == "Subtitles Off") {
		noSubs = subList[i];
	    }
	    else if(subList[i].innerHTML == "English") {
		engSubs = subList[i];
	    }
	}

	// toggling logic
        if(subOn){
        	engSubs.parentElement.click();
	}
        else {
		noSubs.parentElement.click();
	}
        subOn = !subOn
    }
}
