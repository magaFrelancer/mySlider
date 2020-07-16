let sec = 0;
let rotate = 0;
let timer = document.querySelector('.timer');
timer.addEventListener('click', () => {
    sec = 0;
    rotate++;
    timer.style.transform = 'rotate(' + rotate + 'turn)'
})
function seconds() {
    sec++
    timer.innerHTML = sec + '.sec';
}
seconds()
setInterval(seconds, 1000)
//===================================


let slider__items = document.querySelectorAll('.slider__items'),
    btns = document.querySelectorAll('.slider__btn'),
    sliderLi = document.querySelectorAll('.slider__page-li'),
    index = 0,
    timerFun = 2000;


function autoSlider() {
    if (index > slider__items.length - 1) index = 0;

    obh(slider__items, null, true)//для slider__items = opacity = 0
    obh(sliderLi, true, null)//sliderLi = classList.remove('active')
    slider__items[index].style.opacity = 1
    sliderLi[index].classList.add('active');
    index++
};
setInterval(autoSlider, timerFun);
autoSlider()
function obh(item, cls, ops) {
    if (cls == true || ops == null) {
        item.forEach(item => {
            item.classList.remove('active');
        })
    } else if (ops == true || cls == null) {
        item.forEach(item => {
            item.style.opacity = 0;
        })
    }
};

sliderLi.forEach(item => {
    item.addEventListener('click', clickSlider);
});

function clickSlider() {
    timerFun = 0;
    let atr = this.getAttribute('data-target');
    index = atr;
    obh(slider__items, null, true)//для slider__items = opacity = 0
    obh(sliderLi, true, null)//sliderLi = classList.remove('active')
    slider__items[atr].style.opacity = 1
    sliderLi[atr].classList.add('active');
    timerFun = 2000;
}
//нужно поработать над кнопками с права и с лево