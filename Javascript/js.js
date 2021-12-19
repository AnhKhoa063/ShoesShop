// JavaScript Document
var dem = 1;
function chuyenBanner1(){
	dem--;
	if( dem < 1)
	{
		dem = 8;
	}
	var x = document.getElementById("Banner");
	x.src = "../banner/banner " + dem + ".png";
	x.style.height = "700px";
}

function chuyenBanner2(){
	dem++;
	if( dem == 9)
	{
		dem = 1;
	}
	var x = document.getElementById("Banner");
	x.src = "../banner/banner " + dem + ".png";
	x.style.height = "700px";
}
setInterval(function(){chuyenBanner2();},3000);


function timKiem(obj) {
	kq = [];
	var t = obj.value.toLowerCase();
	var body1 = document.querySelectorAll("div.item");
	for (var i = 0; i < body1.length; i++) { 
	body1[i].style.border = "";
	}
	for (var i = 0; i < body1.length; i++) {
		var text = body1[i].getElementsByTagName("p")[0];
		if (text != undefined) {
			text = text.innerText;
			if (text.toLowerCase().indexOf(t) >= 0) {
				body1[i].style.border = "1px solid red";
			}
		}
	}
}