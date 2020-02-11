var chart_01a93eb07b984ae7bc550ec3f4222e0d = echarts.init(
    document.getElementById('01a93eb07b984ae7bc550ec3f4222e0d'), 'white', {renderer: 'canvas'});
var option_01a93eb07b984ae7bc550ec3f4222e0d = {
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
            "value": 6
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
chart_01a93eb07b984ae7bc550ec3f4222e0d.setOption(option_01a93eb07b984ae7bc550ec3f4222e0d);