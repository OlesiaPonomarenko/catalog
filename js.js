const images = document.querySelectorAll('.item');

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


