/**
 * Created by pkk on 2018/12/7.
 */
function loadSurvey(){
    var surveyUrl = '../survey/survey.html';
    $.get(surveyUrl, {}, function(survey) {
        $('.common_main').append(survey);
        setTimeout(loadEcharts, 500);
    });
}

function loadEcharts(){
    var myChart = echarts.init(document.getElementById('eachart_form'));
    var option = {
        title: {
            text: "对数轴示例",
            x: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
            x: 'left',
            data: ["2的指数", "3的指数"]
        },
        xAxis: [
            {
                type: "category",
                name: "x",
                splitLine: {show: false},
                data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
            }
        ],
        yAxis: [
            {
                type: "log",
                name: "y"
            }
        ],
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                name: "3的指数",
                type: "line",
                data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]

            },
            {
                name: "2的指数",
                type: "line",
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256]

            }
        ]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
}