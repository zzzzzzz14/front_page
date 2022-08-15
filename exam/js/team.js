var op = [{
		src: "../img/team-dong/BKN_logo.png",
		tname: "布鲁克林 篮网",
		sheng: 21,
		fu: 9,
		lian:"负1",
		liann:-1,
		sore1:109.7,
		sore2:106.3,
		cha:3.4
	},
	{
		src: "../img/team-dong/CHI_logo.png",
		tname: "芝加哥 公牛",
		sheng: 19,
		fu: 10,
		lian:"胜2",
		liann:2,
		sore1:109.3,
		sore2:106.3,
		cha:3.0
	},
	{
		src: "../img/team-dong/CLE_logo.png",
		tname: "克利夫兰 骑士",
		sheng: 19,
		fu: 12,
		lian:"胜6",
		liann:6,
		sore1:107.0,
		sore2:101.1,
		cha:5.9
	},
	{
		src: "../img/team-dong/MIA_logo.png",
		tname: "迈阿密 热火",
		sheng: 19,
		fu: 13,
		lian:"胜1",
		liann:1,
		sore1:107.2,
		sore2:103.5,
		cha:3.7
	},
	{
		src: "../img/team-dong/MIL_logo.png",
		tname: " 密尔沃基 雄鹿",
		sheng: 19,
		fu: 13,
		lian:"负2",
		liann:6,
		sore1:110.0,
		sore2:107.3,
		cha:2.7
	},
	{
		src: "../img/team-dong/PHI_logo.png",
		tname: " 费城 76人",
		sheng: 16,
		fu: 15,
		lian:"胜1",
		liann:1,
		sore1:105.7,
		sore2:106.5,
		cha:-0.8
	},
	{
		src: "../img/team-dong/WAS_logo.png",
		tname: "华盛顿 奇才",
		sheng: 16,
		fu: 5,
		lian:"胜1",
		liann:1,
		sore1:105.6,
		sore2:108.1,
		cha:-2.5
	},
	{
		src: "../img/team-dong/CHA_logo.png",
		tname: " 夏洛特 黄蜂",
		sheng: 16,
		fu: 17,
		lian:"负3",
		liann:-3,
		sore1:114.9,
		sore2:117.1,
		cha:-2.2
	},
	{
		src: "../img/team-dong/BOS_logo.png",
		tname: " 波士顿 凯尔特人",
		sheng: 15,
		fu: 16,
		lian:"负1",
		liann:-1,
		sore1:108.3,
		sore2:107.3,
		cha:1.0
	},
	{
		src: "../img/team-dong/TOR_logo.png",
		tname: "多伦多 猛龙",
		sheng: 14,
		fu: 15,
		lian:"胜1",
		liann:1,
		sore1:105.4,
		sore2:105.2,
		cha:1.2
	},
	{
		src: "../img/team-dong/ATL_logo.png",
		tname: "亚特兰大 老鹰",
		sheng: 14,
		fu: 15,
		lian:"负1",
		liann:-1,
		sore1:115.5,
		sore2:110.0,
		cha:1.5
	},
	{
		src: "../img/team-dong/CHI_logo.png",
		tname: "纽约 尼克斯",
		sheng: 14,
		fu: 17,
		lian:"胜1",
		liann:1,
		sore1:105.8,
		sore2:106.9,
		cha:-1.1
	},
	{
		src: "../img/team-dong/NYK_logo.png",
		tname: "纽约 尼克斯",
		sheng: 19,
		fu: 10,
		lian:"胜6",
		liann:6,
		sore1:107.0,
		sore2:101.1,
		cha:-1.1
	},
	{
		src: "../img/team-dong/ORL_logo.png",
		tname: "奥兰多 魔术",
		sheng: 6,
		fu: 25,
		lian:"胜1",
		liann:1,
		sore1:101.4,
		sore2:101.4,
		cha:-9.9
	},
	{
		src: "../img/team-dong/DET_logo.png",
		tname: "底特律 活塞",
		sheng: 5,
		fu: 25,
		lian:"负1",
		liann:-1,
		sore1:100.1,
		sore2:109.3,
		cha:-9.2
	},
];

function sorttable() {
	var s = "";
	for(var i = 0; i < 15; i++) {
		s += "<tr><th> <div> <img src=" + op[i].src + " \" " + " \" /> <div>" + op[i].tname + "</div></div></th><th>" + op[i].sheng + "</th><th>" + op[i].fu + "</th><th>"+
		op[i].lian+"</th><th>"+op[i].sore1+"</th><th>"+op[i].sore2+"</th><th>"+op[i].cha+"</th>";
	}

	document.getElementById("sort").innerHTML = s;
}
sorttable();
function sortsheng(){
	op.sort(function(x,y){
		return y.sheng-x.sheng;
	});
	sorttable();
}
function sortfu(){
	op.sort(function(x,y){
		return x.sheng-y.sheng;
	});
	sorttable();
}
function sortlian(){
	op.sort(function(x,y){
		return y.liann-x.liann;
	});
	sorttable();
}
function sortsore1(){
	op.sort(function(x,y){
		return y.sore1-x.sore1;
	});
	sorttable();
}
function sortsore2(){
	op.sort(function(x,y){
		return y.sore2-x.sore2;
	});
	sorttable();
}
function sortcha(){
	op.sort(function(x,y){
		return y.cha-x.cha;
	});
	sorttable();
}

var op_=[
	{
		src: "../img/team-xi/PHX_logo.png",
		tname: "菲尼克斯 太阳",
		sheng: 25,
		fu: 5,
		lian:"胜4",
		liann:4,
		sore1:111.8,
		sore2:104.1,
		cha :7.7
	},
	{
		src: "../img/team-xi/GSW_logo.png",
		tname: "金州 勇士",
		sheng: 25,
		fu: 6,
		lian:"胜1",
		liann:1,
		sore1:111.5,
		sore2:101.0,
		cha: 10.5
	},
	{
		src: "../img/team-xi/UTA_logo.png",
		tname: " 犹他 爵士",
		sheng: 21,
		fu: 9,
		lian:"胜1",
		liann:1,
		sore1:111.5,
		sore2:105.0,
		cha: 10.4
	},
	{
		src: "../img/team-xi/MEM_logo.png",
		tname: "孟菲斯 灰熊",
		sheng: 19,
		fu: 13,
		lian:"负2",
		liann:-2,
		sore1:110.8,
		sore2:108.5,
		cha:2.3
	},
	{
		src: "../img/team-xi/DEN_logo.png",
		tname: "丹佛 掘金",
		sheng: 15,
		fu: 14,
		lian:"胜1",
		liann:1,
		sore1:106.8,
		sore2:106.5,
		cha:0.3
	},
	{
		src: "../img/team-xi/MIN_logo.png",
		tname: " 洛杉矶 快船",
		sheng: 16,
		fu: 15,
		lian:"负3",
		liann:-3,
		sore1:105.5,
		sore2:105.3,
		cha:0.2
	},
	{
		src: "../img/team-xi/LAL_logo.png",
		tname: "洛杉矶 湖人",
		sheng: 16,
		fu: 16,
		lian:"负3",
		liann:-3,
		sore1:109.8,
		sore2:111.2,
		cha:-1.4
	},
	{
		src: "../img/team-xi/DAL_logo.png",
		tname: "达拉斯 独行侠",
		sheng: 15,
		fu: 15,
		lian:"胜1",
		liann:1,
		sore1:104.7,
		sore2:104.7,
		cha:0.0
	},
	{
		src: "../img/team-xi/MIN_logo.png",
		tname: "明尼苏达 森林狼",
		sheng: 15,
		fu: 16,
		lian:"负1",
		liann:-1,
		sore1:108.5,
		sore2:108.7,
		cha:-0.2
	},
	{
		src: "../img/team-xi/SAC_logo.png",
		tname: "萨克拉门托 国王",
		sheng: 13,
		fu: 19,
		lian:"负1",
		liann:-1,
		sore1:110.8,
		sore2:114.3,
		cha:-3.5
	},
	{
		src: "../img/team-xi/POR_logo.png",
		tname: "波特兰 开拓者",
		sheng: 13,
		fu: 19,
		lian:"负1",
		liann:-1,
		sore1:108.1,
		sore2:111.0,
		cha:-2.9
	},
	{
		src: "../img/team-xi/SAS_logo.png",
		tname: " 圣安东尼奥 马刺",
		sheng: 12,
		fu: 18,
		lian:"胜1",
		liann:1,
		sore1:109.8,
		sore2:109.8,
		cha:0.0
	},
	{
		src: "../img/team-xi/OKC_logo.png",
		tname: "俄克拉荷马城 雷霆",
		sheng: 10,
		fu: 19,
		lian:"胜2",
		liann:2,
		sore1:99.2,
		sore2:107.8,
		cha:-8.6
	},
	{
		src: "../img/team-xi/NOP_logo.png",
		tname: "新奥尔良 鹈鹕",
		sheng: 11,
		fu: 21,
		lian:"胜3",
		liann:3,
		sore1:104.6,
		sore2:109.6,
		cha:-0.5
	},
	{
		src: "../img/team-xi/HOU_logo.png",
		tname: "休斯顿 火箭",
		sheng:10 ,
		fu: 21,
		lian:"负1",
		liann:-1,
		sore1:106.8,
		sore2:113.5,
		cha:-6.7
	},
	
]
function sorttable_() {
	var q = "";
	for(var i = 0; i < 15; i++) {
		q += "<tr><th> <div> <img src=" + op_[i].src + " \" " + " \" /> <div>" + op_[i].tname + "</div></div></th><th>" + op_[i].sheng + "</th><th>" + op_[i].fu + "</th><th>"+
		op_[i].lian+"</th><th>"+op_[i].sore1+"</th><th>"+op_[i].sore2+"</th><th>"+op_[i].cha+"</th>";
	}

	document.getElementById("sort_").innerHTML = q;
}
sorttable_();
function sortsheng_(){
	op_.sort(function(x,y){
		return y.sheng-x.sheng;
	});
	sorttable_();
}
function sortfu_(){
	op_.sort(function(x,y){
		return x.sheng-y.sheng;
	});
	sorttable_();
}
function sortlian_(){
	op_.sort(function(x,y){
		return y.liann-x.liann;
	});
	sorttable_();
}
function sortsore1_(){
	op_.sort(function(x,y){
		return y.sore1-x.sore1;
	});
	sorttable_();
}
function sortsore2_(){
	op_.sort(function(x,y){
		return y.sore2-x.sore2;
	});
	sorttable_();
}
function sortcha_(){
	op_.sort(function(x,y){
		return y.cha-x.cha;
	});
	sorttable_();
}