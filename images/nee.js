let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let leave = document.getElementById('leave');
let land = document.getElementById('land');
let ac = document.getElementById('ac');
let btn = document.getElementById('btn');
let header = document.getElementById('header');
let loud = document.getElementById('loud');

window.addEventListener('scroll' , function(){
    let value = window.scrollY;

            
     text.style.bottom = 350 + value * 1.5 + 'px';      
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left = value * 2 + 'px';
     leave.style.top = value * -2 + 'px';
     leave.style.right = value * -5 + 'px';
     btn.style.marginTop = value * 1.5 + 'px';
     ac.style.top = value * -1.5 + 'px';
     loud.style.top = value * 0.2 + 'px';
     

})

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
document.querySelectorAll('.pic').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.querySelector('img').getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

function openpop(id) {
    var pop = document.getElementById('pop-' + id);
    pop.style.display = 'block';
}
function closepop() {
    var pop = document.getElementsByClassName("pop");
    for (var i = 0; i < pop.length; i++) {
        pop[i].style.display = "none";
    }
}
