let currentIndex = 0;

window.goToRight = function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel-inner img');
    if (currentIndex < images.length - 1) {
        currentIndex++;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

window.goToLeft = function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel-inner img');
    if (currentIndex > 0) {
        currentIndex--;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}