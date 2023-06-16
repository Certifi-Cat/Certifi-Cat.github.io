var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'module';
document.getElementsByTagName('head')[0].appendChild(script);

function saveData() {
  var name = document.getElementsByName('nftInfo')[0].value;
  var desc = document.getElementsByName('nftInfo')[1].value;
  var address = document.getElementsByName('nftInfo')[2].value;
  var blockchain = IsNullOrEmpty(document.getElementsByName('nftInfo')[3].value.trim()) ? 'goerli' : document.getElementById('inputName').toString();
  document.cookie = "name=" + name "; " + "desc=" + desc "; " + "address=" + address "; " + "blockchain=" + blockchain "; " + "path=/create"
}
