const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;


let images = ["/Assets/detailproduct/yaris/a.jpg",
"/Assets/detailproduct/yaris/b.jpg",
"/Assets/detailproduct/yaris/c.jpg",
"/Assets/detailproduct/yaris/d.jpg",
"/Assets/detailproduct/yaris/e.jpg",
"/Assets/detailproduct/yaris/f.jpg"
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