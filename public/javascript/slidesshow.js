let timeout = 5000; // each pic will auto-display 5s
let slideIndex = 0; // inicialize the index

slideShowAuto();

function slideShowAuto() {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot")
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
 
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
   slides[slideIndex].style.display = "block";
   dots[slideIndex].className += " active";;
   setTimeout(slideShowAuto, timeout);
}

function currentSlide(num){
    slideIndex = num-1;
    slideShowAuto();
}
