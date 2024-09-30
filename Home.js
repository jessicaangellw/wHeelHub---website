let indexSlider = 0;

const slides = $('.carousel');

function showImage(index){
    if(index < 0){
        indexSlider = slides.length - 1;
    } else if (index > slides.length -1){
        indexSlider = 0;
    }
    const offset = -indexSlider * 100 + '%';
    $('.carousel-slider').css('transform', 'translateX(' + offset + ')');
}

function prev(){
     indexSlider--;
     showImage(indexSlider);
}

function next(){
    indexSlider++;
    showImage(indexSlider);
}


function startSlide() {
  intervalId = setInterval(next, 5000); 
}

$("#prev").click(function() {
  prev();
});

$("#next").click(function() {
  next();
  
});

startSlide();


