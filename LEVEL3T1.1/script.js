const thumbnails = document.querySelectorAll('.thumbnail');
const enlargedImage = document.getElementById('enlarged-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    enlargedImage.src = thumbnail.src; // Set enlarged image source
    enlargedImage.style.display = 'block'; // Show enlarged image
  });
});
