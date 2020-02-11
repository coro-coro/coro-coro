var chart_d8d7d4caf96945829b7757b83742f7d9 = echarts.init(
    document.getElementById('d8d7d4caf96945829b7757b83742f7d9'), 'white', {renderer: 'canvas'});
var option_d8d7d4caf96945829b7757b83742f7d9 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"cornflowerblue",
"slategray"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "\uc785\uc6d0",
            "value": 24
        },
        {
            "name": "\ud1f4\uc6d0",
            "value": 4
        }
    ],
    "radius": [
        "0%",
        "75%"
    ],
    "center": [
        "50%",
        "50%"
    ],
    "label": {
        "show": true,
        "position": "top",
        "color": [
            "black"
        ],
        "margin": 8,
        "formatter": "{b}: {d}%"
    },
    "rippleEffect": {
        "show": true,
        "brushType": "stroke",
        "scale": 2.5,
        "period": 4
    }
}
],
"legend": [
{
    "data": [
        "\uc785\uc6d0",
        "\ud1f4\uc6d0"
    ],
    "selected": {},
    "show": true,
    "padding": 5,
    "itemGap": 10,
    "itemWidth": 25,
    "itemHeight": 14
}
],
"tooltip": {
"show": true,
"trigger": "item",
"triggerOn": "mousemove|click",
"axisPointer": {
    "type": "line"
},
"textStyle": {
    "fontSize": 14
},
"borderWidth": 0
},
"title": [
{
    "text": "\uc0c1\ud0dc",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_d8d7d4caf96945829b7757b83742f7d9.setOption(option_d8d7d4caf96945829b7757b83742f7d9);