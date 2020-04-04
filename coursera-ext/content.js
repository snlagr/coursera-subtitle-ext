document.onkeypress = function(e) {
    if(e.key == 'c' || e.key == 'C') {
        subList = document.getElementsByClassName("subtitle-label");
        if(subList[0].parentElement.parentElement.className == "active")
            subList[3].parentElement.click();
        else
            subList[0].parentElement.click();
    }
}