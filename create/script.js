var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'module';
document.getElementsByTagName('head')[0].appendChild(script);

var signedOn = true;

function verifyCreate() {
  if(signedOn == false) {
    window.location.replace("https://certifi-cat.github.io/signup");
  }
  else window.location.replace("https://certifi-cat.github.io/create");
}

function verifyAccount() {
  if(signedOn == false) {
    window.location.replace("https://certifi-cat.github.io/signup");
  }
  else window.location.replace("https://certifi-cat.github.io/account");
}

function saveFile() {
  if(file type is PDF) {
    var img = new Image();
    img.src = pdfCanvas.toDataURL();
  }
  else {
  }
}
