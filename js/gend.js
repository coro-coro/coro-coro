var chart_db1f17fdc2f9468392e57f52c6e01449 = echarts.init(
            document.getElementById('db1f17fdc2f9468392e57f52c6e01449'), 'white', {renderer: 'canvas'});
        var option_db1f17fdc2f9468392e57f52c6e01449 = {
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
        "salmon"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\ub0a8",
                    "value": 16
                },
                {
                    "name": "\uc5ec",
                    "value": 15
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
                "fontSize": 11,
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
                "\ub0a8",
                "\uc5ec"
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
            "text": "\uc131\ubcc4(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_db1f17fdc2f9468392e57f52c6e01449.setOption(option_db1f17fdc2f9468392e57f52c6e01449);
