var chart_8dcfdc5077ba4c6c9e4965f01b56b250 = echarts.init(
    document.getElementById('8dcfdc5077ba4c6c9e4965f01b56b250'), 'white', {renderer: 'canvas'});
var option_8dcfdc5077ba4c6c9e4965f01b56b250 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"#b09880",
"#f0d0c8"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "\uc911\uad6d",
            "value": 5
        },
        {
            "name": "\ud55c\uad6d",
            "value": 22
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
        "\uc911\uad6d",
        "\ud55c\uad6d"
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
    "text": "\uad6d\uc801",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_8dcfdc5077ba4c6c9e4965f01b56b250.setOption(option_8dcfdc5077ba4c6c9e4965f01b56b250);