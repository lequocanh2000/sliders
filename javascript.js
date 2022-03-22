var indexGoable = 1
showSlider(indexGoable)

let nextControl = document.querySelector('.slider__control-next')
let reverseControl = document.querySelector('.slider__control-reverse')
var dots = document.querySelectorAll('.slider__dot-item')
console.log(nextControl);
console.log(reverseControl);

for(let index in dots){
  let number = + index
  number++
  dots[index].onclick = () => {
    showSlider(number)
  }
}

nextControl.onclick = () => {
  indexGoable++ 
  showSlider(indexGoable)
}

reverseControl.onclick = () => {
  indexGoable-- 
  showSlider(indexGoable)
}

setInterval(()=>{
  showSlider(indexGoable)
  console.log(indexGoable)
  indexGoable++;
}, 3000)

function showSlider(index){
	let sliders = document.querySelectorAll('.slider__item')
  let dots = document.querySelectorAll('.slider__dot-item')
  let slidersLength =  sliders.length;
	if(index > slidersLength) { index = 1 }
  if(index < 1) { index = slidersLength }
  for(let slide of sliders){
    slide.classList.add('display-none')
  }
  for(let dot of dots){
  	dot.classList.remove('active')
  }
  sliders[index-1].classList.remove('display-none')
	dots[index-1].classList.add('active')
  indexGoable=index
}