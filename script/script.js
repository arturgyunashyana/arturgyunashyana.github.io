const myheader = new AutoTyping({
    id: 'typedText',
    typeText: ['developer', 'designer', 'freelancer'],
    typeSpeed: 300,
    typeDelay: 100,
    typeRandom: false,
    deleteSpeed: 200,
    deleteDelay: 200,
    typeInfinity: true
})

myheader.init()

// ParticlesJS Config.
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

let photo1 = document.getElementById("src");
let close = document.getElementById("close");
let nka1 = document.getElementById('nkar0');
let nka2 = document.getElementById('nkar1');
let nka3 = document.getElementById('nkar2');
let nka4 = document.getElementById('nkar3');
let nka5= document.getElementById('nkar4');
let nka6 = document.getElementById('nkar5');
let caret1 = document.getElementById('caret1')
let caret2 = document.getElementById('caret2')



document.getElementById("fon-menu").style.display = "none";

let nkarArr=document.getElementsByClassName("nkar");
  for(let i=0;i<nkarArr.length;i++){
    nkarArr[i].addEventListener("click",nkf)
}

nkarSrc=["images/1.jpg",
         "images/2.jpg",
         "images/3.jpg",
         "images/4.jpg",
         "images/5.jpg",
         "images/6.jpg"];



function nkf(){
  let modal = document.getElementById("fon-menu")
  let level = document.getElementById("nkar-fon")
  let top = document.querySelector(".fon-img")
  modal.style.display = "block";
  let id=this.id
  let m=id.slice(4);
  level.src=nkarSrc[m];
  top.classList.add("show")
}

close.onclick = function(){
  let modal = document.getElementById("fon-menu")
  let top = document.querySelector(".fon-img")
  modal.style.display = "none"
}

let i=0;

caret1.onclick = function(){
  var nkar=document.getElementById("nkar-fon");
  i--
  if(i < 0){
    i=nkarSrc.length-1
  }
  nkar.src=nkarSrc[i]
}

caret2.onclick = function(){
  var nkar=document.getElementById("nkar-fon");
  i++;
  if(i >= nkarSrc.length){
    i=0
  }
  nkar.src=nkarSrc[i]
}



function select(li){
  let itemName = li.innerText.toLowerCase()
  let box = $('.globaling')

  for(let i = 0; i < box.length; i++){
    if(box[i].id == itemName){
      $(box[i]).css("display", "block")
    }else{
      $(box[i]).css("display", "none")
    }
  }
}







