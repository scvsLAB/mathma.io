document.getElementById('next').style.visibility = false;

document.getElementById('check_1').onclick = function() {check()};
function check(){
	var x=document.getElementById('ans_1').value;
	if (x==''){
		document.getElementById('mess_1').innerHTML='你還沒作答！';
	}
	else if (x=='雅典學院'){
		document.getElementById('mess_1').innerHTML='答案正確^^';
		document.getElementById('next').style.visibility = true;
	}
	else{
		document.getElementById('mess_1').innerHTML='答錯了QQ';
	}
}

document.getElementById('next').onclick = function() {change()};
function change(){
	document.getElementById('title_1').innerHTML='問題2';
	document.getElementById('question_1').innerHTML='請問下圖兩位哲學家是什麼關係？';
	document.getElementById('img_1').setAttribute ('src','02.jpg')
}
