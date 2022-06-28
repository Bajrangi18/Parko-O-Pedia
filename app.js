import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase , ref, child, get, set,push, update} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js'

const firebaseConfig = {
  apiKey: "AIzaSyDzTHWa_d8jNVFHTAIOfTm2m7sd3R9Hor0",
  authDomain: "parkinga-f02f6.firebaseapp.com",
  databaseURL: "https://parkinga-f02f6-default-rtdb.firebaseio.com",
  projectId: "parkinga-f02f6",
  storageBucket: "parkinga-f02f6.appspot.com",
  messagingSenderId: "787671832329",
  appId: "1:787671832329:web:4ced80daf3473edf7165d8",
  measurementId: "G-2EY73C52H5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// let plotsAvailable = 0;



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

              document.getElementById('logorzp').addEventListener("click", function() {

                  console.log(document.getElementById('priceVal').value);

              });

  });

document.getElementById('availPress').addEventListener("click", function(){
              document.getElementById('qrScanner').style.display = "none";
              document.getElementById('bookSlot').style.display = "none";
              document.getElementById('searchSlot').style.display = "contents";
              document.getElementById('fare').style.display = "none";
              document.getElementById('login').style.display = "none";
              // const dbRef = ref(getDatabase());
              // get(child(dbRef, '/')).then((snapshot) => {
              //   if (snapshot.exists()) {snapshot.val();} else {
              //     console.log("No data available");
              //     }}).catch((error) => {
              //     console.error(error);});
              func_avail();


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

  if(document.getElementById('phoneNo').value == ""){
       // console.log("here");
       document.getElementById('phoneNo').style.borderColor = "red";
  }else{
       console.log("here");
       document.getElementById('phoneNo').style.borderColor = "black";
       const dbRef = ref(getDatabase());
       get(child(dbRef, '/'+decodedText+'/')).then((snapshot) => {
         if (snapshot.exists()) {
           var sp = snapshot.val();
           const valuePlot = Object.values(sp);
           // console.log("plot"+valuePlot(0));
            for(var i=0;i<valuePlot.length;i++){
             if(valuePlot[i]==0){
                console.log("plot"+(i+1));
                const toastLiveExample = document.getElementById('liveToast')
                document.getElementById('toastBod').innerHTML = "PLOT "+(i+1)+ " Alloted";
                const toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
                break;
             }
          }

         } else {
           console.log("No data available");
           }}).catch((error) => {
           console.error(error);});
  }
};





const config = { fps: 25, qrbox: { width: 300, height: 300 } };
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);




function func_avail () {
  document.getElementById('listSpaces').addEventListener("change", function() {

    if(this.value=="A"){
                const dbRef = ref(getDatabase());
                get(child(dbRef, '/Parking '+this.value+'/')).then((snapshot) => {
                  if (snapshot.exists()) {
                    // var plotsAvailable = snapshot.val();
                    console.log(snapshot.val());
                    const keysPlot = Object.keys(snapshot.val());
                    const freePlot = d3.sum(Object.values(snapshot.val()));
                    document.getElementById('freeSlot').style.display = "contents";
                    document.getElementById('freeSlot').innerHTML = freePlot;

                  } else {
                    console.log("No data available");
                    }}).catch((error) => {
                    console.error(error);});
              }
     else if (this.value=="B") {
                     const dbRef = ref(getDatabase());
                     get(child(dbRef, '/Parking '+this.value+'/')).then((snapshot) => {
                       if (snapshot.exists()) {
                         // var plotsAvailable = snapshot.val();
                         console.log(snapshot.val());
                         const keysPlot = Object.keys(snapshot.val());
                         const freePlot = d3.sum(Object.values(snapshot.val()));
                         document.getElementById('freeSlot').style.display = "contents";
                         document.getElementById('freeSlot').innerHTML = freePlot;

                       } else {
                         console.log("No data available");
                         }}).catch((error) => {
                         console.error(error);});
     }else{    console.log(this.value)
                     const dbRef = ref(getDatabase());
                     get(child(dbRef, '/Parking '+this.value+'/')).then((snapshot) => {
                       if (snapshot.exists()) {
                         // var plotsAvailable = snapshot.val();
                         console.log(snapshot.val());
                         const keysPlot = Object.keys(snapshot.val());
                         const freePlot = d3.sum(Object.values(snapshot.val()));
                         document.getElementById('freeSlot').style.display = "contents";
                         document.getElementById('freeSlot').innerHTML = freePlot;

                       } else {
                         console.log("No data available");
                         }}).catch((error) => {
                         console.error(error);});
                }


  });
}

// function generate_table(n, m) {
//
//   var body = document.getElementsByTagName("body")[0];
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");
//
//   for (var i = 0; i < n; i++) {
//
//     var row = document.createElement("tr");
//     for (var j = 0; j < m; j++) {
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode(i+","+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//     tblBody.appendChild(row);
//   }
//
//   tbl.appendChild(tblBody);
//   body.appendChild(tbl);
//   tbl.setAttribute("border", "2");
// }
