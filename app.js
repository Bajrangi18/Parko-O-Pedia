
document.getElementById('qrPress').addEventListener("click", function(){
   document.getElementById('qrScanner').style.display = "contents";
   document.getElementById('bookSlot').style.display = "none";
   document.getElementById('searchSlot').style.display = "none";
   document.getElementById('fare').style.display = "none";
   document.getElementById('login').style.display = "none";
 });

 document.getElementById('farePress').addEventListener("click", function(){
    document.getElementById('qrScanner').style.display = "none";
    document.getElementById('bookSlot').style.display = "none";
    document.getElementById('searchSlot').style.display = "none";
    document.getElementById('fare').style.display = "contents";
    document.getElementById('login').style.display = "none";
  });

document.getElementById('availPress').addEventListener("click", function(){
  document.getElementById('qrScanner').style.display = "none";
  document.getElementById('bookSlot').style.display = "none";
  document.getElementById('searchSlot').style.display = "contents";
  document.getElementById('fare').style.display = "none";
  document.getElementById('login').style.display = "none";
   });
document.getElementById('loginPress').addEventListener("click", function(){
  document.getElementById('qrScanner').style.display = "none";
  document.getElementById('bookSlot').style.display = "none";
  document.getElementById('searchSlot').style.display = "none";
  document.getElementById('fare').style.display = "none";
  document.getElementById('login').style.display = "contents";
    });
document.getElementById('bookPress').addEventListener("click", function(){
  document.getElementById('qrScanner').style.display = "none";
  document.getElementById('bookSlot').style.display = "contents";
  document.getElementById('searchSlot').style.display = "none";
  document.getElementById('fare').style.display = "none";
  document.getElementById('login').style.display = "none";
     });
window.addEventListener('load', (event) => {
  document.getElementById('qrScanner').style.display = "contents";
  document.getElementById('bookSlot').style.display = "none";
  document.getElementById('searchSlot').style.display = "none";
  document.getElementById('fare').style.display = "none";
  document.getElementById('login').style.display = "none";

});
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
};

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
