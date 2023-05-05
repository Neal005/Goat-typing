function showHidePassword() {
	var x = document.getElementById("password");
	console.log(x);
	if (x.type === "password") {
	x.type = "text";
	document.querySelector(".fa").classList.remove("fa-eye-slash");
	document.querySelector(".fa").classList.add("fa-eye");
	} else {
	x.type = "password";
	document.querySelector(".fa").classList.remove("fa-eye");
	document.querySelector(".fa").classList.add("fa-eye-slash");
	}
}

function login() {
	event.preventDefault();
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	var user=localStorage.getItem(username);
	var data=JSON.parse(user);
	if(user==null){
	alert("vui long nhap username va password")
	}
	else if(username==data.username&&password==data.password){
	window.location.href="./index.html"
	}
}