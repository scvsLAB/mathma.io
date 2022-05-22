document.getElementById('check_1').onclick = function() {check()};
function check(){
	var t=document.getElementById('title_1').value;
	if (t=='問題1'){
		var x=document.getElementById('ans_1').value;
		if (x==''){
			document.getElementById('mess_1').innerHTML='你還沒作答！';}
		else if (x=='雅典學院'){
			document.getElementById('mess_1').innerHTML='答案正確^^';
			document.getElementById('next').style.visibility = 'visible';}
		else{
			document.getElementById('mess_1').innerHTML='答錯了QQ';}
	}
	else if (t=='問題2'){
		var x=document.getElementById('ans_1').value;
		if (x==''){
			document.getElementById('mess_1').innerHTML='你還沒作答！';}
		else if (x=='師生'){
			document.getElementById('mess_1').innerHTML='答案正確^^';
			document.getElementById('next').style.visibility = 'visible';}
		else{
			document.getElementById('mess_1').innerHTML='答錯了QQ';}
	}
}

document.getElementById('next').onclick = function() {change()};
function change(){
	var y=document.getElementById('title_1').value;
	if (y=='問題1'){
		document.getElementById('title_1').innerHTML='問題2';
		document.getElementById('question_1').innerHTML='請問下圖兩位哲學家是什麼關係？';
		document.getElementById('img_1').setAttribute ('src','02.jpg')
		document.getElementById('next').style.visibility = '';}
	else if (y=='問題2'){
		document.getElementById('title_1').innerHTML='恭喜過關！';
		document.getElementById('question_1').innerHTML='其實是沒有題目了呵呵';
		document.getElementById('img_1').setAttribute ('src','03.jpg')}
	else {
		document.getElementById('mess_1').innerHTML='沒題目了啦還按';}
}
