function requests() {
	document.getElementById("operations").style.display = "none";
	document.getElementById("requests").style.display = "block";
	document.getElementById("bookmark1").style.opacity = 0.7;
	document.getElementById("bookmark2").style.opacity = 1;
}

function operations() {
	document.getElementById("requests").style.display = "none";
	document.getElementById("operations").style.display = "block";
	document.getElementById("bookmark2").style.opacity = 0.7;
	document.getElementById("bookmark1").style.opacity = 1;
}

function remove_task(sender) {
	sender.parent().remove();
}

function sign_up() {
	window.location = "sign_up.html";
}