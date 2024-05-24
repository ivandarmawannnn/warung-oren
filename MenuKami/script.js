const productContainers = document.querySelectorAll('.paket-makanan');
const btnRight = document.querySelectorAll('.btn-right');
const btnLeft = document.querySelectorAll('.btn-left');

productContainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWith = containerDimensions.width - 200;

    btnRight[i].addEventListener('click', () =>{
        item.scrollLeft += containerWith;
    })

    btnLeft[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWith;
    })
})