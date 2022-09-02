'use strict';

const switcher = document.querySelector('.btn');
var clicks = 0;

document.getElementById("myTest").innerHTML = clicks;

switcher.addEventListener('click', function() {
    clicks++;
    console.log(clicks);
    document.getElementById("myTest").innerHTML = "jag älskar Tace " + clicks + " gånger";
});


