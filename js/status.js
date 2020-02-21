var chart_2c10c650b2de44f5aaae4f753d1c5f55 = echarts.init(
            document.getElementById('2c10c650b2de44f5aaae4f753d1c5f55'), 'white', {renderer: 'canvas'});
        var option_2c10c650b2de44f5aaae4f753d1c5f55 = {
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
        "slategray",
        "#BDBDBD"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\uc785\uc6d0",
                    "value": 66
                },
                {
                    "name": "\ud1f4\uc6d0",
                    "value": 16
                },
                {
                    "name": "\ud655\uc778 \uc911",
                    "value": 74
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
                "\uc785\uc6d0",
                "\ud1f4\uc6d0",
                "\ud655\uc778 \uc911"
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
        chart_2c10c650b2de44f5aaae4f753d1c5f55.setOption(option_2c10c650b2de44f5aaae4f753d1c5f55);
