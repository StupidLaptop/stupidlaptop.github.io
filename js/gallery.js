function activeGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")
	let mainImage = document.querySelector("#gallery-photo > img");
	thumbnails.forEach(function(thumbnail){
		thumbnail.addEventListener("click", function(){
			let newImageSrc    = thumbnail.dataset.largeVersion;
			const currentClass = "current";
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", thumbnail.alt);

			document.querySelector("." + currentClass).classList.remove(currentClass);
			thumbnail.parentNode.classList.add(currentClass);

			let galleryInfo    = document.querySelector("#gallery-info");
			let title          = galleryInfo.querySelector(".title");
			let description    = galleryInfo.querySelector(".description");
			title.innerHTML       = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	})
}
