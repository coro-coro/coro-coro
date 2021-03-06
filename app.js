(function(){
    const config = {
        apiKey: "AIzaSyAV4MDYaPt7EIeukEY4U3nOlBW3By60XdU",
      authDomain: "coro-be6e9.firebaseapp.com",
      databaseURL: "https://coro-be6e9.firebaseio.com",
      projectId: "coro-be6e9",
      storageBucket: "coro-be6e9.appspot.com",
      messagingSenderId: "794191732681",
      appId: "1:794191732681:web:5264ba7b0ad1e5950ad218"
    };
    firebase.initializeApp(config);

    const preObject = document.getElementById('사망자');
    const dbRefObject = firebase.database().ref().child('종합').child('사망자');

    dbRefObject.on('value',snap=>{
        preObject.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject2 = document.getElementById('완치자');
    const dbRefObject2 = firebase.database().ref().child('종합').child('완치자');

    dbRefObject2.on('value',snap=>{
        preObject2.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject3 = document.getElementById('유증상자');
    const dbRefObject3 = firebase.database().ref().child('종합').child('유증상자');

    dbRefObject3.on('value',snap=>{
        preObject3.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject4 = document.getElementById('확진자');
    const dbRefObject4 = firebase.database().ref().child('종합').child('확진자');

    dbRefObject4.on('value',snap=>{
        preObject4.innerText=JSON.stringify(snap.val(),null,3);
    });
    
    
    const preObject7 = document.getElementById('확진자증감');
    const dbRefObject7 = firebase.database().ref().child('종합').child('확진자증감');

    dbRefObject7.on('value',snap=>{
        preObject7.innerText=JSON.stringify(snap.val(),null,3);
    });
    
    const preObject8 = document.getElementById('사망자증감');
    const dbRefObject8 = firebase.database().ref().child('종합').child('사망자증감');

    dbRefObject8.on('value',snap=>{
        preObject8.innerText=JSON.stringify(snap.val(),null,3);
    });
    

    const preObject9 = document.getElementById('완치자증감');
    const dbRefObject9 = firebase.database().ref().child('종합').child('완치자증감');

    dbRefObject9.on('value',snap=>{
        preObject9.innerText=JSON.stringify(snap.val(),null,3);
    });

    const preObject10 = document.getElementById('유증상자증감');
    const dbRefObject10 = firebase.database().ref().child('종합').child('유증상자증감');

    dbRefObject10.on('value',snap=>{
        preObject10.innerText=JSON.stringify(snap.val(),null,3);
        if(preObject10.innerText>=0){
            preObject10.innerText='+'.concat(preObject10.innerText.toString())
            console.log(preObject10.innerText)
        }
    });



    const preObject5 = document.getElementById('지역별');
    const dbRefObject5 = firebase.database().ref().child('지역별확진자수');

    dbRefObject5.on('value',snap=>{
        preObject5.innerText=JSON.stringify(snap.val(),null,3);
        var json = JSON.parse(preObject5.innerText)
        var lst = [["Title","감염자수", {role:'annotation'}]];
        var items = Object.keys(json).map(function(key){
            return [key,json[key]];
        });

        items.sort(function(a,b){
            return b[1]-a[1];
        });
        for (var i=0;i<items.length;i++){
            if (items[i][0].includes('증감')||items[i][0].includes('검역')){
                continue;
            }
            var s = items[i][0].concat('증감');
            lst.push([items[i][0],items[i][1],(items[i][1].toString().concat('(','+',json[s].toString(),')'))]);
        }
        google.charts.load('current', {'packages':['bar','corechart']});
            google.charts.setOnLoadCallback(schedulerSuccessAndFailChart);

                function schedulerSuccessAndFailChart() {
                    var data = google.visualization.arrayToDataTable(lst);
                  var barChartOption = {
                          bars: 'vertical',
                          height :400,
                          vAxis:{textStyle:{fontSize:13}},
                          hAxis:{textStyle:{fontSize:13}},
                          legend: { position: "none", textStyle: {fontSize: 11} }, //'top'
                          colors: ['#ca3433'],// '#5e64c1','#d3e9ff'
                          tooltip:{textStyle : {fontSize:12}, showColorCode : true},
                          annotations: {
                              textStyle: {
                                fontSize: 11,
                                color: '#871b47'
                              }
                          },
                          bar: { groupWidth: "85%" },
                          chartArea:{width:'70%',top:'30',bottom:'0'}
                    };
            
                  var chart = new google.visualization.BarChart(document.getElementById('region'));
            
                  chart.draw(data, barChartOption);
                  
                }
    });

    const preObject6 = document.getElementById('서울지역별');
    const dbRefObject6 = firebase.database().ref().child('구별확진자수');

    dbRefObject6.on('value',snap=>{
        preObject6.innerText=JSON.stringify(snap.val(),null,3);
        var json = JSON.parse(preObject6.innerText)
        var lst = [["Title","감염자수", {role:'annotation'}]];
        var items = Object.keys(json).map(function(key){
            return [key,json[key]];
        });

        items.sort(function(a,b){
            return b[1]-a[1];
        });
        for (var i=0;i<items.length;i++){
            lst.push([items[i][0],items[i][1],items[i][1]])
        }
        google.charts.load('current', {'packages':['bar','corechart']});
            google.charts.setOnLoadCallback(schedulerSuccessAndFailChart);

                function schedulerSuccessAndFailChart() {
                    var data = google.visualization.arrayToDataTable(lst);
            
                  var barChartOption = {
                          bars: 'vertical',
                          height :450,
                          vAxis:{textStyle:{fontSize:11}},
                          hAxis:{textStyle:{fontSize:11}},
                          legend: { position: "none", textStyle: {fontSize: 11} }, //'top'
                          colors: ['#a6b1e1'],// '#5e64c1','#d3e9ff'
                          tooltip:{textStyle : {fontSize:12}, showColorCode : true},
                          annotations: {
                              textStyle: {
                                fontSize: 11,
                                color: '#871b47'
                              }
                          },
                          bar: { groupWidth: "85%" },
                          chartArea:{width:'70%',top:'30',bottom:'0'}
                    };
            
                  var chart = new google.visualization.BarChart(document.getElementById('seoul'));
            
                  chart.draw(data, barChartOption);
                  
                }
    });

    const preObject11 = document.getElementById('외국');
    const dbRefObject11 = firebase.database().ref().child('전세계확진자수');

    dbRefObject11.on('value',snap=>{
        preObject11.innerText=JSON.stringify(snap.val(),null,3);
        var json = JSON.parse(preObject11.innerText)
        var lst = [["Title","감염자수", {role:'annotation'}]];
        var items = Object.keys(json).map(function(key){
            return [key,json[key]];
        });

        items.sort(function(a,b){
            return b[1]-a[1];
        });
        for (var i=0;i<items.length;i++){
            lst.push([items[i][0],items[i][1],items[i][1]])
        }
        google.charts.load('current', {'packages':['bar','corechart']});
            google.charts.setOnLoadCallback(schedulerSuccessAndFailChart);

                function schedulerSuccessAndFailChart() {
                    var data = google.visualization.arrayToDataTable(lst);
            
                  var barChartOption = {
                          bars: 'vertical',
                          height :450,
                          vAxis:{textStyle:{fontSize:11}},
                          hAxis:{textStyle:{fontSize:11}},
                          legend: { position: "none", textStyle: {fontSize: 11} }, //'top'
                          colors: ['#04355e'],// '#5e64c1','#d3e9ff'
                          tooltip:{textStyle : {fontSize:12}, showColorCode : true},
                          annotations: {
                              textStyle: {
                                fontSize: 13,
                                color: 'gray'
                              }
                          },
                          bar: { groupWidth: "85%" },
                          chartArea:{width:'70%',top:'30',bottom:'0'}
                    };
            
                  var chart = new google.visualization.BarChart(document.getElementById('foreign'));
            
                  chart.draw(data, barChartOption);
                  
                }
    });

}());
