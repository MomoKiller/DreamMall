/**
 * Created by pkk on 2018/12/7.
 */
$(function(){
    var survey = {
        api: {
            'mainIonf': 'https://1cfelhwd48.execute-api.us-east-2.amazonaws.com/api/main/info',
            'mainLine': 'https://1cfelhwd48.execute-api.us-east-2.amazonaws.com/api/main/line'
        },
        init: function(){
            survey.loadDataWrap();
            survey.loadEacharts();
        },
        // 数据框
        loadDataWrap: function(){
            $.getJSON(survey.api.mainIonf, {}, function(data){
                console.log(data);
            });
            $.getJSON(survey.api.mainLine, {}, function(data){
                console.log(data);
                
                // 数据处理
                if(data.rtnCode == '0000'){
                    survey.loadEacharts(data.rtnData);
                }else{
                    alert(data.rtnMsg);
                }
            });
        },
        // Echarts 表
        loadEacharts: function(data){
            var myChart = echarts.init(document.getElementById('eachart_form'));
            var option = {
                title: {
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
                        data: data.makeOrder.xData
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
                        data: data.makeOrder.yData
                    },
                    {
                        name: "支付订单数",
                        type: "line",
                        data: data.paidOrder.yData
                    }
                ]
            };
            
            // 为echarts对象加载数据
            myChart.setOption(option);
        }
    };
    survey.init();
});
