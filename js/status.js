var chart_17cc5c4776d24f86a27eb98d73db446a = echarts.init(
            document.getElementById('17cc5c4776d24f86a27eb98d73db446a'), 'white', {renderer: 'canvas'});
        var option_17cc5c4776d24f86a27eb98d73db446a = {
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
                    "value": 20
                },
                {
                    "name": "\ud1f4\uc6d0",
                    "value": 10
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
            "text": "\uc0c1\ud0dc(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_17cc5c4776d24f86a27eb98d73db446a.setOption(option_17cc5c4776d24f86a27eb98d73db446a);
