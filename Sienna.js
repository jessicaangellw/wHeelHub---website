const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;


let images = ["/Assets/detailproduct/Sienna/a.avif",
"/Assets/detailproduct/Sienna/b.avif",
"/Assets/detailproduct/Sienna/c.avif",
"/Assets/detailproduct/Sienna/d.avif",
"/Assets/detailproduct/Sienna/e.avif"
]


function showImage(){
  carousel.src = images[index];
}

prev.addEventListener("click" , ()=>{
  index--;
  if(index < 0){
    index = images.length - 1;
  }
  showImage();
});

function sliding(){
  index++;
  if(index > images.length - 1){
    index = 0;
  }
  showImage();
}

next.addEventListener("click", sliding);
setInterval(sliding, 3000);

window.onload = showImage;