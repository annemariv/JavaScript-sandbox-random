const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToCHooseFrom = document.querySelectorAll(".gallery img");

imagesToCHooseFrom.forEach(img => img.addEventListener('click', imageClick));
function imageClick(e) {
    imagesToCHooseFrom.forEach(img => img.style.opacity = 1);

    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}