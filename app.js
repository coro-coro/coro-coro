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



    const preObject5 = document.getElementById('사망자');
    const dbRefObject5 = firebase.database().ref().child('지역별확진자수');

    dbRefObject5.on('value',snap=>{
        preObject5.innerText=JSON.stringify(snap.val(),null,3);
        var json = JSON.parse(preObject5.innerText)
        for (key in json){
            console.log('key:' + key + ' / ' + 'value:' + json[key])
        }
        google.charts.load('current', {'packages':['bar','corechart']});
            google.charts.setOnLoadCallback(schedulerSuccessAndFailChart);

                function schedulerSuccessAndFailChart() {
                    var data = google.visualization.arrayToDataTable([
                          ["Title","전체", {role:'annotation'}],
                          ['대구', json['대구'], json['대구']],
                            ['경북',json['경북'], json['경북']],
                            ['서울', json['서울'], json['서울']],
                            ['경기', json['경기'], json['경기']],
                            ['부산', json['부산'], json['부산']],
                            ['충남', json['충남'], json['충남']],
                            ['경남', json['경남'], json['경남']],
                            ['울산', json['울산'], json['울산']],
                            ['강원', json['강원'], json['강원']],
                            ['대전', json['대전'], json['대전']],
                            ['충북', json['충북'], json['충북']],
                            ['광주', json['광주'], json['광주']],
                            ['인천', json['인천'], json['인천']],
                            ['전북', json['전북'], json['전북']],
                            ['전남', json['전남'], json['전남']],
                            ['세종', json['세종'], json['세종']]    
                  ]);
            
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
                          chartArea:{width:'85%',top:'30',bottom:'0'}
                    };
            
                  var chart = new google.visualization.BarChart(document.getElementById('region'));
            
                  chart.draw(data, barChartOption);
                  
                }
    });

}());