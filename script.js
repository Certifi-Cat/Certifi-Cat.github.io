var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.sandbox.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.entry.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf_viewer.min.js';
script.type = 'module';
document.getElementsByTagName('head')[0].appendChild(script);

var signedOn = true;

if(document.getElementById("createVerify") != null) {
  document.getElementById("createVerify").addEventListener("click", verifyCreate);
}
if(document.getElementById("welcomeRedirect") != null) {
  document.getElementById("welcomeRedirect").addEventListener("click", verifyCreate);
}
if(document.getElementById("toPage2") != null) {
  document.getElementById("toPage2").addEventListener("click", saveFile);
}
if(document.getElementById("toPage3") != null) {
  document.getElementById("toPage3").addEventListener("click", saveData);
}

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

/*
function PDFToCanvas(url) {
    var options = { zoom: 1.0 };
    function getPage(page) {
        var viewport = page.getViewport(options.zoom);
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvasContainer.appendChild(canvas);
        page.render(renderContext);
    }
    function getPages(pdfDoc) {
        for(var num = 1; num <= pdfDoc.numPages; num++)
            pdfDoc.getPage(num).then(getPage);
    }
    pdfjsLib.disableWorker = true;
    pdfjsLib.getDocument(url).then(getPages);
}
*/

function saveFile() {
  var file = document.getElementById('inFile');
  var img = new Image();
  img.src = file.src;
  var canvas = document.createElement('canvas');

  /*
  pdfjsLib.getDocument('./my_document.pdf').then((pdf) => {
  });

  if(file.value.slice(-4).localeCompare(".pdf")) {
    img.src = file.toDataURL();
  }
  */
  
  /* Convert inputted document to base 64 jpeg */
  let ctx = canvas.getContext('2d');
  let dataURL;
  canvas.height = img.naturalHeight;
  canvas.width = img.naturalWidth;
  ctx.drawImage(img, 0, 0);
  dataURL = canvas.toDataURL('image/jpeg');
  document.cookie = "imgName=" + dataURL.slice(0, 10) + "; " + "path=/create";
  console.log("Made a cookie!" + document.cookie);

  const request = window.indexedDB.open("ImageDatabase", 3);
  request.onerror = (event) => {
    console.log("could not successfully upload your image");
    console.error(`Database error: ${event.target.errorCode}`);
  };
  var db;
  request.onsuccess = (event) => {
    db = event.target.result;
  };
  request.onupgradeneeded = (event) => {
    db = event.target.result;
    var firstTen = '';
    if(dataURL.length > 10) {
      firstTen = dataURL.slice(0, 10);
    }
    else firstTen = dataURL.slice(0, dataURL.length-1)
    const objectStore = db.createObjectStore("pictures", {keyPath: firstTen});
    objectStore.createIndex("name", "name", { unique: true });
  };

  /* Activate a transaction */
  const transaction = db.transaction(["pictures"], "readwrite");
  transaction.oncomplete = (event) => {
    console.log("All done!");
  };
  transaction.onerror = (event) => {
    console.log("transaction error!");
  };

  /* Storing data */
  const openedTransaction = transaction.objectStore("pictures");
  const req = openedTransaction.add(dataURL);
  req.onsuccess = (event) => {
    console.log("Successfully added an object to this database!");
  };

  window.location.replace("https://certifi-cat.github.io/create/step-2");
}

function saveData() {
  var name = document.getElementsByName('nftInfo')[0].value;
  var desc = document.getElementsByName('nftInfo')[1].value;
  var address = document.getElementsByName('nftInfo')[2].value;
  var blockchain = IsNullOrEmpty(document.getElementsByName('nftInfo')[3].value.trim()) ? 'goerli' : document.getElementById('inputName').toString();
  document.cookie = "name=" + name + "; " + "desc=" + desc + "; " + "address=" + address + "; " + "blockchain=" + blockchain + "; " + "path=/create";
  window.location.replace("https://certifi-cat.github.io/step-3");
}

function getDB(imgName) {
  const transaction = db.transaction(["pictures"]);
  const objectStore = transaction.objectStore("pictures");
  const request = objectStore.get(imgName);
  request.onerror = (event) => {
    console.log("couldn't get uploaded image from IndexedDB");
  };
  request.onsuccess = (event) => {
    console.log("outputted from DB: " + $(request.result));
    return $(request.result);
  };
}

function makeNFT() {
  const form = new FormData();
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  var imgName = ca[0];
  var img = getDB(imgName);
  var name = ca[1];
  var desc = ca[2];
  var address = ca[3];
  var blockchain = IsNullOrEmpty(ca[4]) ? 'goerli' : ca[3];
  form.append('allowPlatformToOperateToken', 'true');
  form.append('chain', blockchain);
  form.append('name', name);
  form.append('description', desc);
  form.append('filePath', 'data:image/jpeg;name=UploadedDoc.jpg;base64,' + img + ');');
  form.append('recipientAddress', 'recAd');
  form.append('data', 'data');

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'X-API-Key': $( secrets.VWKey )
    }
  };

  options.body = form;
  fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromFile', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => displayNFT(response))
    .catch(err => console.error(err));

}

function displayNFT(string) {
  var vals = string.split("\"");
  document.getElementById("transactionHash").innerHTML += vals[4];
  document.getElementById("blockExplorer").innerHTML += vals[8];
  document.getElementById("transactionID").innerHTML += vals[12];
  document.getElementById("status").innerHTML += vals[16];
}
