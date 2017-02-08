
var totalDays = 1461;
var totalDays2Administrations = 2923;
var today = new Date();
var inaugurationDay = new Date("01/20/2017");

calcDiffFromInaugurationToToday = function(inauguration, today) {
	var diff = Math.abs(inauguration.getTime() - today.getTime());
	return Math.ceil(diff / (1000 * 3600 * 24));
}

updateClaim = function(inauguration, today, administrations) {
	currentDay = calcDiffFromInaugurationToToday(inauguration, today)
	document.getElementById('currentDay').innerHTML = currentDay
	document.getElementById('totalDays').innerHTML = (administrations === 1 ? totalDays : totalDays2Administrations);
}

getPercentageOfPresidency = function(inauguration, today, administrations) {
	percentage = (calcDiffFromInaugurationToToday(inauguration, today) / ((administrations === 1 ? totalDays : totalDays2Administrations)/100)).toFixed(3)
	return percentage
}









// Konami Code - press ↑↑ ↓↓ ←→ ←→ b a
// check it out at https://github.com/zookee1/js-konami-code
document.addEventListener("keydown", konamiCode, false);
var konami_index = 0;

function konamiCode(e) {
    /*---
     * ↑↑ ↓↓ ←→ ←→ b a
     ---*/
    var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var keyCode = e.keyCode;

    if(keyCode === konami_keys[konami_index++]) {
        if (konami_index === konami_keys.length) {
            console.log('redirecting to savethechildren.org');
            window.location.href = 'https://twitter.com/roguepotusstaff';
        }
    } else {
        konami_index = 0;
    }

}







// BattleNet progress bar
// Thanks to https://twitter.com/simeydotme
// Check out https://codepen.io/simeydotme/pen/IrGqz

resetColors = function() {
  
  $bar
    .removeClass("progress__bar--green")
    .removeClass("progress__bar--yellow")
    .removeClass("progress__bar--orange")
    .removeClass("progress__bar--blue");
  
  $progress
    .removeClass("progress--complete");
  
};

update = function() {
  
  timer = setTimeout( function() {
    percent = parseFloat( percent );
    
    $text.find("em").text( percent + "%" );

    if( percent >= 100 ) {

      percent = 100;
      $progress.addClass("progress--complete");
      $bar.addClass("progress__bar--blue");
      $text.find("em").text( "Complete" );

    } else {
      
      if( percent >= green ) {
        $bar.addClass("progress__bar--green");
      }
      
      else if( percent >= yellow ) {
        $bar.addClass("progress__bar--yellow");
      }
      
      else if( percent >= orange ) {
        $bar.addClass("progress__bar--orange");
      }
      
      // speed = Math.floor( Math.random() * 900 );
      // update();

    }

    $bar.css({ width: percent + "%" });

  }, speed);
  
};

setTimeout( function() {

  $progress.addClass("progress--active");
  update();

},1000);