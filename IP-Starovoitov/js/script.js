let currentSlide=1;let switchSlide=function(slide){if(slide<1)slide=4;if(slide>4)slide=1;document.querySelectorAll('.slider-item').forEach((e,index)=>{e.classList.remove('slider-item_active');if(++index==slide){e.classList.add('slider-item_active')}})
currentSlide=slide}
document.querySelector('#prew-arrow').addEventListener('click',()=>{switchSlide(--currentSlide)});document.querySelector('#next-arrow').addEventListener('click',()=>{switchSlide(++currentSlide)});document.querySelector('.form__range').addEventListener('input',()=>{document.querySelector('.form__range-value').textContent=`${document.querySelector('.form__range').value} %`});document.querySelector('.header__burger').addEventListener('click',()=>{document.querySelector('.nav').classList.toggle('nav__active')})