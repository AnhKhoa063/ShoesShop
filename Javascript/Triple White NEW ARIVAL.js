/* Chọn Size*/
var id = 35;
function chonSize(i){
	id = i ;
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
	x.src = "../Sneaker/Sneaker Triple White/giay" + dem + ".jpg";
}

function chuyenBanner2(){
	dem++;
	if(dem == 6)
	{
		dem = 1;
	}
	var x = document.getElementById("Banner");
	x.src = "../Sneaker/Sneaker Triple White/giay" + dem + ".jpg";
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
		var x = confirm("Họ tên: " + ht + "\nSố điện thoại: " + sdt + "\nĐịa chỉ: " + diachi + "\nEmail: " + email + "\nGhi chú: " + ghichu + "\nTên sản phẩm: Sneaker Triple White NEW ARIVAL" + "\nSize: " + id + "\nSố lượng: " + number + "\nTổng tiền: " + tien + " VNĐ");
	}
	else
	{
		alert("Vui lòng kiểm tra thông tin khách hàng");
		var x = confirm("Họ tên: " + ht + "\nSố điện thoại: " + sdt + "\nĐịa chỉ: " + diachi + "\nEmail: " + email + "\nTên sản phẩm: Sneaker Triple White NEW ARIVAL" + "\nSize: " + id + "\nSố lượng: " + number + "\nTổng tiền: " + tien + " VNĐ");
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
	tien = 1250000 * number ;
	var tongTien = document.getElementById("tien");
	tongTien.innerHTML = tien + " VNĐ";
}

/* Change Ảnh */
function change(obj){
	var im = document.getElementById("Banner");
	im.src = obj.src;
}