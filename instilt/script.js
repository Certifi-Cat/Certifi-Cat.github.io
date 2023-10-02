var script = document.createElement('script');
document.getElementsByTagName('head')[0].append(script);

var images = document.getElementsByClassName("carousel");
function loadCarousel(position) {
    images[position].setAttribute('id', "carouselCenter");
    images[position].classList.remove("carouselHidden");
}

function moveSlide(choice) {
    var curr = -2;
    for(i = 0; i < images.length; i++) {
        if(images[i].hasAttribute("carouselCenter")) {
            curr = i;
            console.log("attributes: " + images[i].hasAttribute);
        }
    }
    curr += choice;
    console.log("I'm here with curr as " + curr);
    if(curr == -1) {
        curr = images.length - 1;
    }
    else if(curr == images.length) {
        curr = 0;
    }

    for(i = 0; i < images.length; i++) {
        if(i == curr) {
            images[i].setAttribute('id', "carouselCenter");
            images[i].classList.remove("carouselHidden");
        }
        else if(i == curr - 1) {
            images[i].setAttribute('id', "carouselLeft");
            images[i].classList.remove("carouselHidden");
        }
        else if(i == curr + 1) {
            images[i].setAttribute('id', "carouselRight");
            images[i].classList.remove("carouselHidden");
        }
        else images[i].classList.add("carouselHidden");
    }
}
