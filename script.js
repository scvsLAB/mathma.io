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

document.getElementById('next').onclick = function() {change()};
function change(){
	var y=document.getElementById('ans_1').value;
	if (y=='雅典學院'){
		document.getElementById('title').innerHTML='問題2';
		document.getElementById('question').innerHTML='請問下圖兩位哲學家是什麼關係？';
		document.getElementById('img').setAttribute ('src','02.jpg')
	}
	else {
		
	}
}
