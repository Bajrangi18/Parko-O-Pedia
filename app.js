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
 let global_space = "";
 let global_park = "";
 let global_status = "";


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


              document.getElementById('spacePark').innerHTML = global_space ;
              document.getElementById('slotPark').innerHTML = global_park;
              document.getElementById('statusPark').innerHTML = global_status;

              // document.getElementById('logorzp').addEventListener("click", function() {
              //
              //     console.log(document.getElementById('priceVal').value);
              //
              // });

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

             if(valuePlot[i]==1){
                console.log("plot"+(i+1));
                const toastLiveExample = document.getElementById('liveToast')
                document.getElementById('toastBod').innerHTML = "PLOT "+(i+1)+ " Alloted";
                const toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
                global_space = decodedText;
                global_park = (i+1).toString();
                global_status = "Parked"
                break;
             }
          }
          if(i==valuePlot.length) {
                const toastLiveExample = document.getElementById('liveToast')
                document.getElementById('toastBod').innerHTML = "No Slots Available";
                const toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
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
                    const freePlot = Object.values(snapshot.val());
                    let mySum = 0;
                    for(var j=0;j<freePlot.length;j++){
                      mySum = mySum + freePlot[j];
                    }
                    document.getElementById('freeSlot').style.display = "contents";
                    document.getElementById('freeSlot').innerHTML = mySum;

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
                       const freePlot = Object.values(snapshot.val());
                       let mySum = 0;
                       for(var j=0;j<freePlot.length;j++){
                         mySum = mySum + freePlot[j];
                       }
                       document.getElementById('freeSlot').style.display = "contents";
                       document.getElementById('freeSlot').innerHTML = mySum;

                     } else {
                       console.log("No data available");
                       }}).catch((error) => {
                       console.error(error);});
               }else{    const dbRef = ref(getDatabase());
                 get(child(dbRef, '/Parking '+this.value+'/')).then((snapshot) => {
                   if (snapshot.exists()) {
                     // var plotsAvailable = snapshot.val();
                     console.log(snapshot.val());
                     const keysPlot = Object.keys(snapshot.val());
                     const freePlot = Object.values(snapshot.val());
                     let mySum = 0;
                     for(var j=0;j<freePlot.length;j++){
                       mySum = mySum + freePlot[j];
                     }
                     document.getElementById('freeSlot').style.display = "contents";
                     document.getElementById('freeSlot').innerHTML = mySum;

                   } else {
                     console.log("No data available");
                     }}).catch((error) => {
                     console.error(error);});
                 }


  });
}
