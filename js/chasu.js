var chart_a1ed014292d74d4198c0a37a2a686b0d = echarts.init(
            document.getElementById('a1ed014292d74d4198c0a37a2a686b0d'), 'white', {renderer: 'canvas'});
        var option_a1ed014292d74d4198c0a37a2a686b0d = {
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
        "orangered",
        "gray"
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
                },
                {
                    "name": "\ud655\uc778 \uc911",
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
                "fontSize": 11,
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
                "3\ucc28",
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
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_a1ed014292d74d4198c0a37a2a686b0d.setOption(option_a1ed014292d74d4198c0a37a2a686b0d);
