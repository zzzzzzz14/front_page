window.onload = function() {
	var box = this.document.getElementsByClassName("re")[0];
	var lik = box.getElementsByTagName("li");

	function fun(i, j) { 
		lik[i].style.opacity = 1;
		lik[j].style.opacity = 0;
		lik[i + 5].style.backgroundColor = "#ffffff";
		lik[j + 5].style.backgroundColor = "#00000000"
	}
	fun(0, 1); 
	var i = 0;

	function auto() { 
		if(++i >= 5) {
			i = 0;
			fun(0, 4);
		} else fun(i, i - 1);
	}
	timer = this.setInterval(auto, 2000);
	box.onmouseover = function() { 
		console.log('good');
		clearInterval(timer);
	}
	box.onmouseout = function() { 
		timer = setInterval(auto, 2000); 
	}
	var j = 0;
	for(; j < 5; j++) { 
		lik[j + 5].ind = j;
		lik[j + 5].onclick = function() {
			fun(this.ind, i)
			i = this.ind;
		}
	}

}
