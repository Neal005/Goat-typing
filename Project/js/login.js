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