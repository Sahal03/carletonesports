function changeImage(thumbnail) {
    // Remove active class from all thumbnails
    document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Change main image source
    document.getElementById('mainImage').src = thumbnail.src;
}

function openFullImage(image) {
    window.open(image.src, '_blank');
}