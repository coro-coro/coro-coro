(function(){
    const config = {
        apiKey: "AIzaSyA7gHUpEf2ZMeQVNTesS2R5XNlK6cm-clw",
        authDomain: "corodb-5d4ac.firebaseapp.com",
        databaseURL: "https://corodb-5d4ac.firebaseio.com",
        projectId: "corodb-5d4ac",
        storageBucket: "corodb-5d4ac.appspot.com",
        messagingSenderId: "1050192511366",
        appId: "1:1050192511366:web:f0e3fe20cf58562647ec07",
        measurementId: "G-XJMVTHXBL4"
    };
    firebase.initializeApp(config);

    const preObject = document.getElementById('사망자');
    const dbRefObject = firebase.database().ref().child('사망자');

    dbRefObject.on('value',snap=>{
        preObject.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject2 = document.getElementById('완치자');
    const dbRefObject2 = firebase.database().ref().child('완치자');

    dbRefObject2.on('value',snap=>{
        preObject2.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject3 = document.getElementById('유증상자');
    const dbRefObject3 = firebase.database().ref().child('유증상자');

    dbRefObject3.on('value',snap=>{
        preObject3.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject4 = document.getElementById('확진자');
    const dbRefObject4 = firebase.database().ref().child('확진자');

    dbRefObject4.on('value',snap=>{
        preObject4.innerText=JSON.stringify(snap.val(),null,3);
    });

}());