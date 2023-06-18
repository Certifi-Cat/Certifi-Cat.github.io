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
  var file = document.getElementById('inFile');
  var img;
  var canvas = document.createElement('canvas');
  
  if(file.value.slice(-4).localeCompare(".pdf")) {
    img = new Image();
    img.src = file.toDataURL();
  }
  /* Convert inputted document to base 64 jpeg */
  let ctx = canvas.getContext('2d');
  let dataURL;
  canvas.height = img.naturalHeight;
  canvas.width = img.naturalWidth;
  ctx.drawImage(img, 0, 0);
  dataURL = canvas.toDataURL('image/jpeg');

  const request = window.indexedDB.open("MyTestDatabase", 3);
  request.onerror = (event) => {
    console.log("could not successfully upload your image");
    console.error(`Database error: ${event.target.errorCode}`);
  };
  request.onsuccess = (event) => {
    db = event.target.result;
  };
  // This event is only implemented in recent browsers
  request.onupgradeneeded = (event) => {
    // Save the IDBDatabase interface
    const db = event.target.result;
    // Create an objectStore for this database
    const objectStore = db.createObjectStore("pictures", { keyPath: dataURL.slice(0, 10) });
  };

  document.cookie = "image=" + dataURL "; " + "path=/create"
}

function saveData() {
  var name = document.getElementsByName('nftInfo')[0].value;
  var desc = document.getElementsByName('nftInfo')[1].value;
  var address = document.getElementsByName('nftInfo')[2].value;
  var blockchain = IsNullOrEmpty(document.getElementsByName('nftInfo')[3].value.trim()) ? 'goerli' : document.getElementById('inputName').toString();
  document.cookie = "name=" + name "; " + "desc=" + desc "; " + "address=" + address "; " + "blockchain=" + blockchain "; " + "path=/create";
}

function makeNFT() {
  const form = new FormData();
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  var img = /* get stuff from API database */;
  var name = ca[0];
  var desc = ca[1];
  var address = ca[2];
  var blockchain = IsNullOrEmpty(ca[4]) ? 'goerli' : ca[3];
  form.append('allowPlatformToOperateToken', 'true');
  form.append('chain', blockchain);
  form.append('name', name);
  form.append('description', desc);
  form.append('filePath', 'data:image/jpeg;name=UploadedDoc.jpg;base64,' + img + ');';
  form.append('recipientAddress', 'recAd');
  form.append('data', 'data');

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'X-API-Key': ${{ secrets.VWKey }}
    }
  };

  options.body = form;
  fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromFile', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

}

/*
{
  "transaction_details": {
    "transactionHash": "0x66bddc84383c292007900ad8b098e426924a57e0cf2e390f7550063a0bd63a30",
    "blockExplorer": "https://goerli.etherscan.io/tx/0x66bddc84383c292007900ad8b098e426924a57e0cf2e390f7550063a0bd63a30",
    "transactionID": "648d920ac45d837b84ecdc50",
    "status": "Sent"
  }
}
*/
