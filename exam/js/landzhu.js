var ran=Math.random();
ran=Math.ceil(ran*10);
document.getElementById("yanimg").src="../img/验证码/"+ran+".png";
var mark=0;

var inp=document.getElementById("chooseImg")
      		inp.onchange=function(){
            var file=this.files[0];
            imageUrl = URL.createObjectURL(file);
            image = document.getElementById("img");
            image.src = imageUrl;
        }
     
function judgename(){
	var name=document.getElementById("name").value;
	if((name[0]=="2"&&name[1]=="0"&&name[2]=="1"&&name[3]=="4"&&name[4]=="1"&&name[5]=="2"&&name[6]=="6"&&name[7]=="0"&&name[8]<=4&&( name[9]>=0&&name[9]<=9 ) )&&name.length==10){
		alert("用户名重复，请重新输入");
		document.getElementById("namejudge").src="../img/judge/"+2+".png";
	}
	else if(name.length==0){
		document.getElementById("namejudge").src="../img/judge/face.png";
	}
	else{
		document.getElementById("namejudge").src="../img/judge/"+1+".png";
	}
}
function judgepass(){
	var pass=document.getElementById("password").value;
	if(pass.length==0)
	{
		document.getElementById("passjudge").src="../img/judge/face.png";
		return ;
	}
	if(pass.length<=6)
	{
		alert("密码长度需要大于6位，请重新输入");
		document.getElementById("password").value="";
		document.getElementById("passjudge").src="../img/judge/"+2+".png";
	}
	else if(pass.length==0)
	{
		document.getElementById("passjudge").src="../img/judge/face.png";
	}
	else{
		document.getElementById("passjudge").src="../img/judge/"+1+".png";
	}
}
function judgerepass(){
	var repass=document.getElementById("repassword").value;
	var pass=document.getElementById("password").value;
	if(repass.length==0){
		document.getElementById("repassjudge").src="../img/judge/face.png";
		return ;
	}
	if(pass.length==0){
		document.getElementById("repassjudge").src="../img/judge/face.png";
		return ;
	}
	if(pass!=repass ){
		alert("密码输入错误，请重新输入");
		document.getElementById("repassjudge").src="../img/judge/"+2+".png";
	}
	else
	{
		document.getElementById("repassjudge").src="../img/judge/"+1+".png";
	}
	
}
function judgeemail(){
	var email=document.getElementById("email").value;
	if(email.length==0){
		document.getElementById("repassjudge").src="../img/judge/face.png";
		return ;
	}
	var judge= /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
	var der=judge.test(email);
	if(!der){
		alert("输入的邮箱号有误，请重新输入");
		document.getElementById("emailjudge").src="../img/judge/"+2+".png";
	}
	else
	{
		document.getElementById("emailjudge").src="../img/judge/"+1+".png";
	}
}
function zhuoncik(){
	ran=Math.random();
	ran=Math.ceil(ran*10);
	document.getElementById("yanimg").src="../img/验证码/"+ran+".png";
}
function success(){
	var yanzheng=["odnf","fqxa","usxb","vlrk","smjs","waii","yshv","dcjm","mrqa","tvhd"];
	if(document.getElementById("yantext").value==yanzheng[ran-1]){
		alert("注册成功");
		window.location.assign('land.html');
	}
	else{
		alert("验证码输入错误，请重新输入");
		document.getElementById("yantext").value="";
		ran=Math.random();
		ran=Math.ceil(ran*10);
		document.getElementById("yanimg").src="../img/验证码/"+ran+".png";
	}
}
function changetype1(){
	if(document.getElementById("password").type=="password"){
		document.getElementById("password").type="text";
		document.getElementById("eyes1").src="../img/type/open.png";
	}
	else{
		document.getElementById("password").type="password";
		document.getElementById("eyes1").src="../img/type/close.png";
	}
}
function changetype2(){
	if(document.getElementById("repassword").type=="password"){
		document.getElementById("repassword").type="text";
		document.getElementById("eyes2").src="../img/type/open.png";
	}
	else{
		document.getElementById("repassword").type="password";
		document.getElementById("eyes2").src="../img/type/close.png";
	}
}