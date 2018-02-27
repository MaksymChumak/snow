var dispDiv = document.getElementById('display'),
		timer = null,
		mheight = 0,
		numSnow = 0;

function makeItSnow() {
	var snow = document.createElement('div'),
			mleft = Math.round(Math.random() * 100),
			mdim = Math.round(Math.random() * 40) + 10;
			
	dispDiv.appendChild(snow);
	
	snow.className = 'snows';
	snow.style.left = mleft + '%';
	snow.style.width = mdim + 'px';
	snow.style.height = mdim + 'px';
	
	/*
	if (mdim >= 40) {
		snow.style.transition = 'top 5s';
		snow.style.opacity = 1;
	} else if (mdim >= 30) {
		snow.style.transition = 'top 8s';
		snow.style.opacity = 0.8;
	} else if (mdim >= 20) {
		snow.style.transition = 'top 11s';
		snow.style.opacity = 0.6;
	} else if (mdim >= 10) {
		snow.style.transition = 'top 14s';
		snow.style.opacity = 0.4;
	} 
	*/
	
	var tt = 55 - mdim,
			op = mdim / 50;
	
	snow.style.transition = 'top ' + tt + 's';
	snow.style.opacity = op;
	
	setTimeout(function() {
		snow.style.top = '110%';
		setTimeout(function() {
			dispDiv.removeChild(snow);
			/*
			numSnow ++;
			if (numSnow % 20 == 0) {
				mheight ++;
				document.getElementById('ground').style.height = mheight +'%';
			}
			*/
		},tt * 1000);
	},100);
};

/* Controls */
var start = document.getElementById('start');
start.addEventListener('click', function() {
	if (timer == null){
		var freq = document.getElementById('freq').value;
		freq = parseInt(freq);
		
		var spd = 1100 - freq * 100;
		timer = setInterval(function() {
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
		makeItSnow();
	},spd);
		
}
	
	document.getElementById('stop').addEventListener('click', function() {
		clearInterval(timer);
		timer = null;
	});

});