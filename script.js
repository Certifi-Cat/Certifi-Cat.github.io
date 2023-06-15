var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'module';
document.getElementsByTagName('head')[0].appendChild(script);

var signedOn = false;

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

function makeNFT() {
  const form = new FormData();
  form.append('allowPlatformToOperateToken', 'true');
  form.append('chain', 'goerli');

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'X-API-Key': ${{ secrets.VWKey }}
    }
  };
}
