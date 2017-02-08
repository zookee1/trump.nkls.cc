
var totalDays = 1461;
var today = new Date();
var inaugurationDay = new Date("01/20/2017");

function calcDiffFrominaugurationToToday(inauguration, today) {
	var diff = Math.abs(inauguration.getTime() - today.getTime());
	return Math.ceil(diff / (1000 * 3600 * 24));
}

updateClaim = function(inauguration, today) {
	currentDay = calcDiffFrominaugurationToToday(inauguration, today)
	document.getElementById('currentDay').innerHTML = currentDay
	document.getElementById('totalDays').innerHTML = totalDays
}

getPercentageOfPresidency = function(inauguration, today, totalDays) {
	percentage = (calcDiffFrominaugurationToToday(inauguration, today) / (totalDays/100)).toFixed(3)
	return percentage
}


updateClaim(inaugurationDay, today)









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

var $progress = $(".progress"),
    $bar = $(".progress__bar"),
    $text = $(".progress__text"),
    percent = getPercentageOfPresidency(inaugurationDay, today, totalDays),
    update,
    resetColors,
    speed = 200,
    orange = 35,
    yellow = 70,
    green = 90,
    timer;

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