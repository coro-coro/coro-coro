var chart_0037df7ac338482e9d3e1ce0ace10a86 = echarts.init(
    document.getElementById('0037df7ac338482e9d3e1ce0ace10a86'), 'white', {renderer: 'canvas'});
var option_0037df7ac338482e9d3e1ce0ace10a86 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"maroon",
"firebrick",
"orangered"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "1\ucc28",
            "value": 15
        },
        {
            "name": "2\ucc28",
            "value": 9
        },
        {
            "name": "3\ucc28",
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
        "formatter": "{b}:\n{d}%"
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
        "1\ucc28",
        "2\ucc28",
        "3\ucc28"
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
    "text": "\uac10\uc5fc \ucc28\uc218",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_0037df7ac338482e9d3e1ce0ace10a86.setOption(option_0037df7ac338482e9d3e1ce0ace10a86);