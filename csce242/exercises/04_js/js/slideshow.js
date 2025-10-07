setInterval(() => {
    const currentSlide = document.querySelector('#slideshow :not(.hidden)');
    let nextSlide = currentSlide.nextElementsSibling; 

    if(!nextSlide){ //next slide ==null (i.e. last slide)
        nextSlide = document.querySelector('#slideshow :first-child');
    }

    currentSlide.classList.add('hidden');  //hide current slide
    nextSlide.classList.remove('hidden');  //show next slide
}, 1000);
