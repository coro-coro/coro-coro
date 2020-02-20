var chart_11e04dfb7b5f4bddb442527007738377 = echarts.init(
            document.getElementById('11e04dfb7b5f4bddb442527007738377'), 'white', {renderer: 'canvas'});
        var option_11e04dfb7b5f4bddb442527007738377 = {
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
        "#f0d0c8",
        "gray"
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
                    "value": 76
                },
                {
                    "name": "\ud655\uc778 \uc911",
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
                "\uc911\uad6d",
                "\ud55c\uad6d",
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
            "text": "\uad6d\uc801(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_11e04dfb7b5f4bddb442527007738377.setOption(option_11e04dfb7b5f4bddb442527007738377);
