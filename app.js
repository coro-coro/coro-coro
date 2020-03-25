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
                           
                            
                            ['충남', json['충남'], json['충남']],
                            ['부산', json['부산'], json['부산']],
                            
                            ['경남', json['경남'], json['경남']],
                        ['세종', json['세종'], json['세종']],
                        ['울산', json['울산'], json['울산']],
                        ['충북', json['충북'], json['충북']],
                        ['인천', json['인천'], json['인천']],
                        
                        ['강원', json['강원'], json['강원']],
                        
                            
                         
                            
                            ['대전', json['대전'], json['대전']],
                            ['광주', json['광주'], json['광주']],
                            
                            
                           
                         
                            ['전북', json['전북'], json['전북']],
                       
                            ['전남', json['전남'], json['전남']],
                        ['제주', json['제주'], json['제주']]
                              
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
        var lst = [["Title","전체", {role:'annotation'}]];
        console.log(json);
        var items = Object.keys(json).map(function(key){
            return [key,json[key]];
        });

        items.sort(function(a,b){
            return b[1]-a[1];
        });

        console.log(items[0]);
        // var aux = 'na';
        // for (key in json){
        //     if (aux=='na'){
        //         aux = key;
        //         lst.append([key,json[key],json[key]]);
        //         continue;
        //     }
        //     var temp = json[key];
        //     while(aux)

        //     console.log('key:' + key + ' / ' + 'value:' + json[key])
        // }
        google.charts.load('current', {'packages':['bar','corechart']});
            google.charts.setOnLoadCallback(schedulerSuccessAndFailChart);

                function schedulerSuccessAndFailChart() {
                    var data = google.visualization.arrayToDataTable([
                          ["Title","전체", {role:'annotation'}],
                        ['동대문구', json['동대문구'],json['동대문구']],
                        ['구로구', json['구로구'],json['구로구']],
                        ["관악구", json['관악구'],json['관악구']],
                        
                        ['송파구', json['송파구'],json['송파구']],
                        
                          ['노원구', json['노원구'],json['노원구']],
                        ['은평구', json['은평구'],json['은평구']],
                        ["강남구", json['강남구'],json['강남구']],
                        ["강서구", json['강서구'],json['강서구']],
                        ['양천구', json['양천구'],json['양천구']],
                        ['영등포구', json['영등포구'],json['영등포구']],
                        ['마포구', json['마포구'],json['마포구']],
                          ['종로구', json['종로구'],json['종로구']],
                        
                        ['성북구', json['성북구'],json['성북구']],
                        ['동작구', json['동작구'],json['동작구']],
                        ['서초구', json['서초구'],json['서초구']],
                        ['서대문구', json['서대문구'],json['서대문구']],
                        ["강동구", json['강동구'],json['강동구']],
                            ['금천구', json['금천구'],json['금천구']],
                        ['중랑구', json['중랑구'],json['중랑구']],
                            
                            ['성동구', json['성동구'],json['성동구']],
                             
                            ['광진구', json['광진구'],json['광진구']],
                            
                           
                            
                            
                        
                            ['도봉구', json['도봉구'],json['도봉구']]
                            
                            
                            
                            
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
