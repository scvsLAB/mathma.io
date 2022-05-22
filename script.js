document.getElementById('show').onclick = function() {change()};

function change(){
	document.getElementById('show').innerHTML='粗體即現在範圍';
}

document.getElementById('check_1').onclick = function() {check()};

function check(){
	var x=document.getElementById('ans_1').value;
	if (x==''){
		document.getElementById('mess_1').innerHTML='你還沒作答！';
	}
	else if (x=='雅典學院'){
		document.getElementById('mess_1').innerHTML='答案正確^^';
	}
	else{
		document.getElementById('mess_1').innerHTML='答錯了QQ';
	}
}
