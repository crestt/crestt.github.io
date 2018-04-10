function changeClass(){
	var width = document.body.clientWidth;
	var chang = document.getElementById("chang");
	if (width>991) {
		chang.setAttribute("class","zp_pic");
	}
	if (width>767) {
		chang.setAttribute("class","zp_pic_sm");
	}
	if (width<767){
		chang.setAttribute("class","zp_pic");
	}
}
window.setInterval("changeClass()", 10);