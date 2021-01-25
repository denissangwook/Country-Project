//gallery.html
//The following JS modified from 
//JS found at : https://www.w3schools.com/howto/howto_css_modal_images.asp
// Get the modal
let modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal
// use its "alt" text as a caption
let img = document.querySelectorAll(".city-image");
let modalImg = document.querySelector("#img01");
let captionText = document.querySelector("#caption");
img.forEach(image => {
    image.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}