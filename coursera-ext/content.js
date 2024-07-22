// Trigger whenever a key is pressed
document.onkeydown = function (e) {

  if (e.key == 'c' || e.key == 'C') {

    // Grab all subtitles
    subList = document.getElementsByClassName("subtitle-label");

    // Find out engSubs and noSubs
    for (i = 0; i < subList.length; i++) {
      if (subList[i].innerHTML == "Subtitles Off") {
        noSubs = subList[i];
      }

      else if (subList[i].innerHTML == "English") {
        engSubs = subList[i];
      }
    }

    // Toggling logic
    if (noSubs.parentElement.parentElement.className == "active") {
      engSubs.parentElement.click();
    }
    else {
      noSubs.parentElement.click();
    }
  }
}
