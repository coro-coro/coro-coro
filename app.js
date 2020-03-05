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



    const preObject5 = document.getElementById('지역별');
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
                            ['경기', json['경기'], json['경기']],
                            ['서울', json['서울'], json['서울']],
                            
                            ['부산', json['부산'], json['부산']],
                            ['충남', json['충남'], json['충남']],
                            ['경남', json['경남'], json['경남']],
                            ['울산', json['울산'], json['울산']],
                            ['강원', json['강원'], json['강원']],
                            ['대전', json['대전'], json['대전']],
                            ['광주', json['광주'], json['광주']],
                            ['충북', json['충북'], json['충북']],
                            
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

    const preObject6 = document.getElementById('서울지역별');
    const dbRefObject6 = firebase.database().ref().child('구별확진자수');

    dbRefObject6.on('value',snap=>{
        preObject6.innerText=JSON.stringify(snap.val(),null,3);
        var json = JSON.parse(preObject6.innerText)
        for (key in json){
            console.log('key:' + key + ' / ' + 'value:' + json[key])
        }
        google.charts.load('current', {'packages':['bar','corechart']});
            google.charts.setOnLoadCallback(schedulerSuccessAndFailChart);

                function schedulerSuccessAndFailChart() {
                    var data = google.visualization.arrayToDataTable([
                          ["Title","전체", {role:'annotation'}],
                          ['송파구', json['송파구'],json['송파구']],
                          ['종로구', json['종로구'],json['종로구']],
                          ["강남구", json['강남구'],json['강남구']],
                          ['노원구', json['노원구'],json['노원구']],
                          ['은평구', json['은평구'],json['은평구']],
                          ['서초구', json['서초구'],json['서초구']],
                          ['성북구', json['성북구'],json['성북구']],
                            ["강동구", json['강동구'],json['강동구']],
                            ["관악구", json['관악구'],json['관악구']],
                            ['서대문구', json['서대문구'],json['서대문구']],
                            ['영등포구', json['영등포구'],json['영등포구']],
                            ['동대문구', json['동대문구'],json['동대문구']],
                            ['성동구', json['성동구'],json['성동구']],
                            ["강서구", json['강서구'],json['강서구']],
                            ['광진구', json['광진구'],json['광진구']],
                            ['양천구', json['양천구'],json['양천구']],
                            ['중랑구', json['중랑구'],json['중랑구']],
                            ['구로구', json['구로구'],json['구로구']],
                            ['금천구', json['금천구'],json['금천구']],
                            ['도봉구', json['도봉구'],json['도봉구']],
                            
                            ['동작구', json['동작구'],json['동작구']],
                            ['마포구', json['마포구'],json['마포구']]
                            
                  ]);
            
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

}());