/* Chọn Size*/
function chonSize(i){
	var id = i ;
	var y = document.getElementsByClassName("size active") ;
	y[0].className = "size" ;
	var z = document.getElementsByClassName("size");
	for(i = 0; i < z.length; i++)
	z[i].style.color = "black";
	var x = document.getElementById(id) ;
	x.className = "size active" ;
	x.style.color = "white" ;
}

/* Chuyển Ảnh */
var dem = 1;
function chuyenBanner1(){
	dem--;
	if(dem < 1)
	{
		dem = 5;
	}
	var x = document.getElementById("Banner");
	x.src = "../quanao/9p1h" + dem + ".jpeg";
}

function chuyenBanner2(){
	dem++;
	if(dem == 6)
	{
		dem = 1;
	}
	var x = document.getElementById("Banner");
	x.src = "../quanao/9p1h" + dem + ".jpeg";
}
setInterval(function(){chuyenBanner2();},5000);

/* Xuất lại thông tin */
function thanhtoan(){
	var ht = document.getElementById("name1").value;
	var sdt = document.getElementById("name2").value;
	var diachi = document.getElementById("name3").value;
	var email = document.getElementById("name4").value;
	var ghichu = document.getElementById("name5").value;
	var i = document.getElementById("button");
	if( ghichu != "")
	{
		alert("Vui lòng kiểm tra thông tin khách hàng");
		var x = confirm("Họ tên: " + ht + "\nSố điện thoại: " + sdt + "\nĐịa chỉ: " + diachi + "\nEmail: " + email + "\nGhi chú: " + ghichu);
	}
	else
	{
		alert("Vui lòng kiểm tra thông tin khách hàng");
		var x = confirm("Họ tên: " + ht + "\nSố điện thoại: " + sdt + "\nĐịa chỉ: " + diachi + "\nEmail: " + email);
	}
	if( x == true)
		alert("Đơn hàng của quý khách đã được xác nhận. SNEAKER FOOT sẽ liên lạc với quý khách sớm nhất có thể !!! \nSNEAKER FOOT xin chân thành cảm ơn !!!");
	else
		alert("Đơn hàng của quý khách chưa được xác nhận. Vui lòng xem lại thông tin khách hàng !!!");
}
var number;
var tien;
function tinhTien(){
	number = document.getElementById("num").value ;
	tien = 380000 * number ;
	var tongTien = document.getElementById("tien");
	tongTien.innerHTML = tien + " VNĐ";
}
/* Change Ảnh */
function change(obj){
	var im = document.getElementById("Banner");
	im.src = obj.src;
}// JavaScript Document