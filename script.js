document.getElementById('check_1').onclick = function() {check()};

function check(){
	try{ 
		var x=document.getElementById('ans_1').value;
		if(x=='') throw '你還沒作答！';
		if(x=='雅典學院') throw '答案正確^^';
		if(x!='雅典學院' && x!='') throw '答錯了QQ';
	}
	catch(err){
		document.getElementById('mess_1').innerHTML=err;
	}
}
