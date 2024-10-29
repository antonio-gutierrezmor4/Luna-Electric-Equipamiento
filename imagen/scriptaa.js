const images = document.querySelectorAll('.img-options a');
const imageButtons = [...images];
let imageId = 1;

imageButtons.forEach((imageItem) => {
    imageItem.addEventListener('click', (event) => {
        event.preventDefault();
        imageId = imageItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-rotation img:first-child').clientWidth;

    document.querySelector('.img-rotation').style.transform = `translateX(${- (imageId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
