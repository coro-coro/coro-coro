var chart_cb21206c3f0f4f53b23871ceb18e879f = echarts.init(
    document.getElementById('cb21206c3f0f4f53b23871ceb18e879f'), 'white', {renderer: 'canvas'});
var option_cb21206c3f0f4f53b23871ceb18e879f = {
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
            "value": 3
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
chart_cb21206c3f0f4f53b23871ceb18e879f.setOption(option_cb21206c3f0f4f53b23871ceb18e879f);