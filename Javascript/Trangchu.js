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