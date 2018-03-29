{
	let borboleta = document.querySelector(".borboleta");
	let borboleto = document.querySelector(".borboleto");

	setTimeout(() => document.body.classList.add('render'), 60);
	imagesLoaded('.glitch__img', { background: true }, () => {
		document.body.classList.add('imgloaded');
		borboleta.classList.add('borboleta-toggle');
		borboleto.classList.add('borboleto-toggle');
	});
}
