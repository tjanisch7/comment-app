function getComment() {
	var name = document.getElementById('name').value;
	var post = document.getElementById('commentText').value;
	postComment(name, post);
	addPicture(name);

}

function postComment(name, post) {
	var h2 = document.createElement('h2');
	var h3 = document.createElement('h3');
	var d = new Date();
	h2.textContent = d;
	h3.textContent = name;
	var userName = document.getElementById('postComment');
	userName.appendChild(h2);
	userName.appendChild(h3);
	var p = document.createElement('p');
	p.textContent = post;
	userName.appendChild(p);
	p.className = "text";
}	

function addPicture(name) {
	var pic = document.getElementById('pict').value;
	var img = document.createElement('img');
	img.setAttribute('src', pic);
	var userName = document.getElementById('postComment');
	userName.appendChild(img);
}








