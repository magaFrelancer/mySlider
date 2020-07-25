let img = document.querySelectorAll('.slider__li'),
    btn = document.querySelectorAll('.slider__btn'),
    page = document.querySelectorAll('.slider__page_li'),
    index = 0,
    interval = null;

function target() {
    console.log(this.getAttribute('data-target'))
    prevClass(img, index, 'active')
    prevClass(page, index, 'active')
    if (this.dataset.target === 'next') {
        index++;
        if (index >= img.length) {
            index = 0;
        }
    } else if (this.dataset.target === 'prev') {
        index--;
        if(index < 0) {
            index = img.length -1
        }
    } else {
        index = parseInt(this.dataset.target);
    }
    nextClass(img, index, 'active')
    nextClass(page, index, 'active')
}
function moveInterval() {
    prevClass(img, index, 'active')
    prevClass(page, index, 'active')
    index++;
    if (index >= img.length) {
        index = 0;
    }
    nextClass(img, index, 'active')
    nextClass(page, index, 'active')
}


function prevClass(obj, index, strClass) {
    obj[index].classList.remove(strClass);
}
function nextClass(obj, index, strClass) {
    obj[index].classList.add(strClass);
}
function startSlide(time) {
    interval = setInterval(moveInterval, time)
}
function stopSlide() {
    clearInterval(interval)
}
// startSlide(3000)
page.forEach(item => {
    item.addEventListener('click', target)
});
btn.forEach(item => {
    item.addEventListener('click', target)
});