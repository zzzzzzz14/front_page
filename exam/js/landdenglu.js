
var ran=Math.random();
ran=Math.ceil(ran*10);
document.getElementById("yanimg").src="../img/验证码/"+ran+".png";

function getface(){
	var mark=0;
	var name=document.getElementById("name").value;
	var mapp=[ "2014126040","2014126041","2014126042","2014126043","2014126044","2014126045" ];
	if(name[0]=="2"&&name[1]=="0"&&name[2]=="1"&&name[3]=="4"&&name[4]=="1"&&name[5]=="2"&&name[6]=="6"&&name[7]=="0"&&name[8]<=4){
		var der=(Number(name[8]*10)+Number(name[9]));
		document.getElementById("imgg").src="../img/face/"+der%10+".jpg";
		mark++;
	}
	if(mark==0)
	document.getElementById("imgg").src="../img/face/face.png";
}
function ckimg(){
	ran=Math.random();
	ran=Math.ceil(ran*10);
	document.getElementById("yanimg").src="../img/验证码/"+ran+".png";
}


function getenter(){
	var yanzheng=["odnf","fqxa","usxb","vlrk","smjs","waii","yshv","dcjm","mrqa","tvhd"];
	var name=document.getElementById("name").value;
	var pass=document.getElementById("password").value;
	var mark1=0,mark2=0,mark3=0;
	if(name[0]=="2"&&name[1]=="0"&&name[2]=="1"&&name[3]=="4"&&name[4]=="1"&&name[5]=="2"&&name[6]=="6"&&name[7]=="0"&&name[8]<=4){
		mark1++;
	}
	if(name==pass){
		mark2++;
	}
	if(document.getElementById("yantext").value==yanzheng[ran-1]){
		mark3++;
	}
	if(mark1==1&&mark2==1&&mark3==1){
		alert("登陆成功");
		window.location.assign('house.html');
	}
	else if(mark3==0){
		alert("验证码输入错误");
//		window.location.assign('land.html');
		ran=Math.random();
		ran=Math.ceil(ran*10);
		document.getElementById("yanimg").src="../img/验证码/"+ran+".png";
		document.getElementById("yantext").value="";
	}
	else if(mark1==0 ||(mark1==1&&mark2==0) ){
		alert("用户名或密码输入错误");
		window.location.assign('land.html');
	}
}
function changetype(){
	if(document.getElementById("password").type=="password"){
		document.getElementById("password").type="text";
		document.getElementById("eyes").src="../img/type/open.png";
	}
	else{
		document.getElementById("password").type="password";
		document.getElementById("eyes").src="../img/type/close.png";
	}
}
