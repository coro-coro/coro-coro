var chart_5aa551c963fe4d53890377f8116e7581 = echarts.init(
    document.getElementById('5aa551c963fe4d53890377f8116e7581'), 'white', {renderer: 'canvas'});
var option_5aa551c963fe4d53890377f8116e7581 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"#fc6472",
"#f4b2a6",
"#eccdb3",
"#bcefd0",
"#a1e8e4",
"#23c8b2",
"#7f5a7c"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "\uae30\ud0c0 \ud574\uc678 \ubc29\ubb38\uc790",
            "value": 3
        },
        {
            "name": "\uc6b0\ud55c \uad50\ubbfc",
            "value": 3
        },
        {
            "name": "\uc6b0\ud55c \ubc29\ubb38\uc790",
            "value": 6
        },
        {
            "name": "\uc911\uad6d \ubc29\ubb38\uc790",
            "value": 2
        },
        {
            "name": "\uc911\uad6d\uc778 \uad00\uad11\uac1d",
            "value": 3
        },
        {
            "name": "\ud655\uc9c4\uc790 \uac00\uc871",
            "value": 8
        },
        {
            "name": "\ud655\uc9c4\uc790 \uc9c0\uc778",
            "value": 2
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
        "\uae30\ud0c0 \ud574\uc678 \ubc29\ubb38\uc790",
        "\uc6b0\ud55c \uad50\ubbfc",
        "\uc6b0\ud55c \ubc29\ubb38\uc790",
        "\uc911\uad6d \ubc29\ubb38\uc790",
        "\uc911\uad6d\uc778 \uad00\uad11\uac1d",
        "\ud655\uc9c4\uc790 \uac00\uc871",
        "\ud655\uc9c4\uc790 \uc9c0\uc778"
    ],
    "selected": {},
    "show": false,
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
    "padding": 5,
    "itemGap": 10
}
]
};
chart_5aa551c963fe4d53890377f8116e7581.setOption(option_5aa551c963fe4d53890377f8116e7581);