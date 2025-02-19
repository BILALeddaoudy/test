// Add your JavaScript here
// Example: Add to cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product .btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You will be redirected to WhatsApp to complete your order!');
        });
    });

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});