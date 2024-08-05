document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide-radio');
    const totalSlides = slides.length;

    function autoSlide() {
        slideIndex = (slideIndex + 1) % totalSlides; // Переключение слайдов по кругу
        slides[slideIndex].checked = true; // Активация следующей радио кнопки
    }

    setInterval(autoSlide, 2000); // Установка интервала переключения
});
