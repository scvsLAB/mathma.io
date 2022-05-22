var num=1;

document.getElementById('check_1').onclick = function() {check()};
function check(){
	if (num==1){
		var x=document.getElementById('ans_1').value;
		if (x==''){
			document.getElementById('mess_1').innerHTML='你還沒作答！';}
		else if (x=='雅典學院'){
			document.getElementById('mess_1').innerHTML='答案正確^^';
			document.getElementById('next').style.visibility = 'visible';}
		else{
			document.getElementById('mess_1').innerHTML='答錯了QQ';}
	}
	else {
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
	if (num==1){
		document.getElementById('title_1').innerHTML='<strong>問題2</strong>';
		document.getElementById('question_1').innerHTML='請問左圖中兩位哲學家是什麼關係？';
		document.getElementById('img_1').setAttribute ('src','02.jpg')
		document.getElementById('next').style.visibility = 'hidden';
		document.getElementById('ans_1').value='';
		document.getElementById('mess_1').innerHTML='你答對了嗎？';
		num=num+1;}
	else if(num==2){
		document.getElementById('title_1').innerHTML='<strong>恭喜過關！</strong>';
		document.getElementById('question_1').innerHTML='其實是沒有題目了呵呵';
		document.getElementById('img_1').setAttribute ('src','pass.jpg')
		document.getElementById('ans_1').style.visibility = 'hidden';
		document.getElementById('check_1').style.visibility = 'hidden';
		document.getElementById('mess_1').style.visibility = 'hidden';
		num=num+1;}
	else{
		document.getElementById('title_1').innerHTML='<strong>是在哈囉</strong>';
		document.getElementById('question_1').innerHTML='就說沒有題目了還按';
		document.getElementById('next').style.visibility = 'hidden';
		document.getElementById('img_1').setAttribute ('src','03.jpg');}
}
