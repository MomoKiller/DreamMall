/**
 * Created by pkk on 2018/12/7.
 */
$(function(){
    var survey = {
        api: {
            
        },
        init: function(){
            survey.loadDataWrap();
            survey.loadEacharts();
        },
        // 数据框
        loadDataWrap: function(){
            
        },
        // Echarts 表
        loadEacharts: function(){
            var myChart = echarts.init(document.getElementById('eachart_form'));
            var option = {
                title: {
                    // text: "标题",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: 'center',
                    data: ["下单笔数", "支付订单数"],
                    y: 30
                },
                grid: {                 // 控制表格边距
                    x: 80,
                    y: 80,
                    x2: 80,
                    y2: 60
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
                calculable: true,
                series: [
                    {
                        name: "下单笔数",
                        type: "line",
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                    },
                    {
                        name: "支付订单数",
                        type: "line",
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                    }
                ]
            };
            
            // 为echarts对象加载数据
            myChart.setOption(option);
        }
    };
    survey.init();
});
