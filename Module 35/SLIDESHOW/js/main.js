var slideIndex = 1;

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i - 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    if(n > slides.length){
        slideIndex = 1;
    }

    if(n<1){
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block"
}

showSlide(1);

function plusSlides(n){
    slideIndex += n;
    showSlide(slideIndex);
}

setInterval(plusSlides, 3000, 1);