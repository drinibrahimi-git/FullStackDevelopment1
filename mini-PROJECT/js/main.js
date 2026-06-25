var hamburger = document.getElementsById("hamburger");

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

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
} 