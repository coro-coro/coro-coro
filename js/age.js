var chart_8961c0ce8e174d5eb2754292a31cc744 = echarts.init(
    document.getElementById('8961c0ce8e174d5eb2754292a31cc744'), 'white', {renderer: 'canvas'});
var option_8961c0ce8e174d5eb2754292a31cc744 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"#BDBDBD",
"#c23531",
"#2f4554",
"#61a0a8",
"#d48265",
"#749f83",
"#ca8622",
"#bda29a",
"#6e7074",
"#546570",
"#c4ccd3",
"#f05b72",
"#ef5b9c",
"#f47920",
"#905a3d",
"#fab27b",
"#2a5caa",
"#444693",
"#726930",
"#b2d235",
"#6d8346",
"#ac6767",
"#1d953f",
"#6950a1",
"#918597"
],
"series": [
{
    "type": "bar",
    "name": "\ud655\uc9c4\uc790 \uc218(\uba85)",
    "data": [
        6,
        5,
        6,
        8,
        1,
        1
    ],
    "barCategoryGap": "20%",
    "label": {
        "show": true,
        "position": "right",
        "color": [
            "black"
        ],
        "margin": 8
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
        "\ud655\uc9c4\uc790 \uc218(\uba85)"
    ],
    "selected": {
        "\ud655\uc9c4\uc790 \uc218(\uba85)": true
    },
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
"xAxis": [
{
    "show": true,
    "scale": false,
    "nameLocation": "end",
    "nameGap": 15,
    "gridIndex": 0,
    "inverse": false,
    "offset": 0,
    "splitNumber": 5,
    "minInterval": 0,
    "splitLine": {
        "show": false,
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        }
    }
}
],
"yAxis": [
{
    "show": true,
    "scale": false,
    "nameLocation": "end",
    "nameGap": 15,
    "gridIndex": 0,
    "inverse": false,
    "offset": 0,
    "splitNumber": 5,
    "minInterval": 0,
    "splitLine": {
        "show": false,
        "lineStyle": {
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
        }
    },
    "data": [
        "20\ub300",
        "30\ub300",
        "40\ub300",
        "50\ub300",
        "60\ub300",
        "70\ub300"
    ]
}
],
"title": [
{
    "padding": 5,
    "itemGap": 10
}
]
};
chart_8961c0ce8e174d5eb2754292a31cc744.setOption(option_8961c0ce8e174d5eb2754292a31cc744);