 /*const images = document.querySelectorAll('.item');

images.forEach( item => {
    item.addEventListener('mouseover', () =>{
    removeFocus();
    item.classList.add('selected');
    })
    removeFocus = () => {
        images.forEach(item => {
            item.classList.remove('selected');
        })
    }
})

images.forEach( item => {
    item.addEventListener ('click', () => {
        removeFocus();
        item.classList.add('selected');
    })
})
*/

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


