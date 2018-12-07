/**
 * Created by pkk on 2018/12/6.
 */
$(function(){
    var main = {
        api: {
            surveyUrl: '../survey/survey.html',
            productUrl: '../product/product.html',
            customerUrl: '../customer/customer.html',
            orderUrl: '../order/order.html',
            dataUrl: '../data/data.html',
            settingUrl: '../setting/setting.html'
        },
        init: function(){
            main.loadComHead();
            main.loadComNav();
            main.loadMain();        
        },
        // 加载主页
        loadMain: function(navIndex){
            if(!navIndex){                  // 首次加载概况
                navIndex = 0;
            }
            var mainUrlKey = {
                0: 'surveyUrl',
                1: 'productUrl',
                2: 'customerUrl',
                3: 'orderUrl',
                4: 'dataUrl',
                5: 'settingUrl'
            };
            $.get(main.api[mainUrlKey[navIndex]], {}, function(mainHtml){
                $('.common_main').html(mainHtml);
            });
        },
        // 左侧导航
        loadComNav: function(){
            var domNavLi = $('.common_nav li');
            domNavLi.bind('click', function(){
                var navIndex = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                main.loadMain(navIndex);
            });
        },
        // 头部信息
        loadComHead: function(){

        }
    };
    main.init();
});