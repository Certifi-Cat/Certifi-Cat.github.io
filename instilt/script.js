var script = document.createElement('script');
document.getElementsByTagName('head')[0].append(script);

var images = document.getElementsByClassName("carouselImage"); /* Can swap out hardcoded images for a GET request */
var curr = 0;

function moveSlide(choice) {
    for(i = 0; i < images.length; i++) {
        if(images[i].getAttribute("id") === "carouselCenter") {
            curr = i;
            console.log("attributes yay");
        }
    }
    curr += choice;
    curr = Math.abs(curr % images.length);
    left = curr - 1 < 0 ? images.length + curr - 1 : (curr - 1) % images.length;
    right = curr + 1 < 0 ? images.length + curr + 1 : (curr + 1) % images.length;

    for(i = 0; i < images.length; i++) {
        if(i == curr) {
            images[i].setAttribute('id', "carouselCenter");
        }
        else if(i == left) {
            images[i].setAttribute('id', "carouselLeft");
        }
        else if(i == right) {
            images[i].setAttribute('id', "carouselRight");
        }
        else {
            images[i].setAttribute('id', "carouselHidden");
        }
    }
}

var text = [
    {
        "imageName": "One.png", 
        "imageDescription": "This is the description of the first image"
    }, 
    {
        "imageName": "Two.png", 
        "imageDescription": "And here's the description of the second image"
    }]
document.getElementById('carouselCenter').addEventListener('hover', function showText() {
    
});
