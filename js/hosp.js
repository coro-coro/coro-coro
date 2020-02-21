 var chart_2c09d31abdac45419eb61fc886bde8bd = echarts.init(
            document.getElementById('2c09d31abdac45419eb61fc886bde8bd'), 'white', {renderer: 'canvas'});
        var option_2c09d31abdac45419eb61fc886bde8bd = {
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
                2,
                1,
                3,
                1,
                1,
                1,
                2,
                5,
                9,
                2,
                2,
                3,
                8,
                5,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                4,
                99
            ],
            "barCategoryGap": "20%",
            "label": {
                "show": true,
                "position": "top",
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
            "axisLabel": {
                "show": true,
                "position": "top",
                "rotate": -13,
                "margin": 8
            },
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
                "\uacbd\uae30\ub3c4\uc758\ub8cc\uc6d0 \uc548\uc131\ubcd1\uc6d0",
                "\uacbd\ubcf5\ub300\ubcd1\uc6d0",
                "\uacbd\ubd81\ub300\ubcd1\uc6d0",
                "\uacbd\ubd81\ub300\ud559\uad50 \ubcd1\uc6d0",
                "\uacc4\uba85\ub300\ub3d9\uc0b0\ubcd1\uc6d0",
                "\uacc4\uba85\ub300\ubcd1\uc6d0",
                "\uad6d\uad70\uc218\ub3c4\ubcd1\uc6d0",
                "\uad6d\ub9bd\uc911\uc559\uc758\ub8cc\uc6d0",
                "\ub300\uad6c\uc758\ub8cc\uc6d0",
                "\ub3d9\uad6d\ub300\uacbd\uc8fc\ubcd1\uc6d0",
                "\uba85\uc9c0\ubcd1\uc6d0",
                "\ubd84\ub2f9\uc11c\uc6b8\ub300\ubcd1\uc6d0",
                "\uc11c\uc6b8\ub300\ubcd1\uc6d0",
                "\uc11c\uc6b8\uc758\ub8cc\uc6d0",
                "\uc601\ub0a8\ub300\ubcd1\uc6d0",
                "\uc6d0\uad11\ub300\ubcd1\uc6d0",
                "\uc778\ucc9c\uc758\ub8cc\uc6d0",
                "\uc77c\uc0b0\uba85\uc9c0\ubcd1\uc6d0",
                "\uc804\ub0a8\ub300\ubcd1\uc6d0",
                "\uc870\uc120\ub300\ubcd1\uc6d0",
                "\uce60\uace1\uacbd\ubd81\ub300\ubcd1\uc6d0",
                "\ud3ec\ud56d\uc758\ub8cc\uc6d0",
                "\ud655\uc778 \uc911"
            ]
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
            }
        }
    ],
    "title": [
        {
            "text": "\uaca9\ub9ac\ubcd1\uc6d0",
            "padding": 5,
            "itemGap": 10
        }
    ],
    "dataZoom": [
        {
            "show": true,
            "type": "slider",
            "realtime": true,
            "start": 20,
            "end": 80,
            "orient": "horizontal",
            "zoomLock": false
        },
        {
            "show": true,
            "type": "inside",
            "realtime": true,
            "start": 20,
            "end": 80,
            "orient": "horizontal",
            "zoomLock": false
        }
    ]
};
        chart_2c09d31abdac45419eb61fc886bde8bd.setOption(option_2c09d31abdac45419eb61fc886bde8bd);
