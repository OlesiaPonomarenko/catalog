 
const images = document.querySelectorAll('.item');

function removeFocus() {
    images.forEach(i => i.classList.remove('selected'));
}

images.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    });
});

images.forEach(item => {
    item.addEventListener('click', () => {
        removeFocus();
        item.classList.add('selected');
    });
});

const container = document.querySelector('#container');
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const photos = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];
const btnClick = document.querySelector('.btnClick');
const png = ['./img/chocolate-box.png', './img/be-mine.png', './img/bee.png', './img/coffee-cup.png', './img/valentines-day.png'];
const text = document.querySelector('.text');
const textP = ['I recommend it, fast and high quality.', 'You made my dream come true. Thank you.', 'Fast, high-quality. I recommend it.', 'You did the impossible. I will come again.', 'Thank you for the wonderful furniture.']
const user = document.querySelector('.user');
const userSpan = ['Alex: ', 'Lucy: ', 'Nick: ', 'Alice: ', 'Charly: '];

let indexPhotos = 0;

next.addEventListener('click', () => {
indexPhotos++;
if (indexPhotos > photos.length - 1) {
    indexPhotos = 0;
}
document.querySelector('.photo').src = photos[indexPhotos];
})

back.addEventListener('click', () => {
    indexPhotos--;
    if(indexPhotos < 0) {
      indexPhotos =  photos.length -1;
    }
    document.querySelector('.photo').src = photos[indexPhotos];
})

let i = 0;
let indexUser = 0;

btnClick.addEventListener('click', () => {
    i++;
    if (i > png.length -1) {
        i = 0;
    }
    if(i > userSpan.length -1) {
        i = 0;
    }
    document.querySelector('#png').src = png[i];
    document.querySelector('.user').textContent  = userSpan[i];
    document.querySelector('.text').textContent = textP[i];
})