/**
 * Created by pkk on 2018/12/6.
 */
$(function(){
    var _nav1Index = 0;
    var _nav2Index = 0;
    var main = {
        api: {
            /**** 单页面URL *****/
            surveyUrl: './survey/survey.html',
            productManageUrl: './product/product_manage.html',
            productClassUrl: './product/product_class.html',
            productDeliveryUrl: './product/product_delivery.html',
            productGiveUrl: './product/product_give.html',
            customerManageUrl: './customer/customer_manage.html',
            customerOrganizeUrl: './customer/customer_organize.html',
            orderAllUrl: './order/order_all.html',
            orderRecordUrl: './order/order_record.html',
            dataFlowUrl: './data/data_flow.html',
            dataExchangeUrl: './data/data_exchange.html',
            dataProductUrl: './data/data_product.html',
            dataSaleUrl: './data/data_sale.html',
            dataIncomeUrl: './data/data_income.html',
            settingStaffUrl: './setting/setting_staff.html',
            settingBannerUrl: './setting/setting_banner.html',
            settingMsgUrl: './setting/setting_msg.html',
            settingOrderUrl: './setting/setting_order.html',
            settingInfoUrl: './setting/setting_info.html',
            settingReminderUrl: './setting/setting_reminder.html',
            settingDialogUrl: './setting/setting_dialog.html'
            
        },
        init: function(){
            main.loadComHead();
            main.loadComNav();
            main.loadMain(0, 0);      
        },
        // 加载主页
        loadMain: function(index1, index2){
            var mainUrlKey = [{
                0: 'surveyUrl'
            },{
                0: 'productManageUrl',
                1: 'productClassUrl',
                2: 'productDeliveryUrl',
                3: 'productGiveUrl'
            },{
                0: 'customerManageUrl',
                1: 'customerOrganizeUrl'
            },{
                0: 'orderAllUrl',
                1: 'orderRecordUrl'
            },{
                0: 'dataFlowUrl',
                1: 'dataExchangeUrl',
                2: 'dataProductUrl',
                3: 'dataSaleUrl',
                4: 'dataIncomeUrl'
            },{
                0: 'settingStaffUrl',
                1: 'settingBannerUrl',
                2: 'settingMsgUrl',
                3: 'settingOrderUrl',
                4: 'settingInfoUrl',
                5: 'settingReminderUrl',
                6: 'settingDialogUrl'
            }];

            $.get(main.api[mainUrlKey[index1][index2]], {}, function(mainHtml){
                $('.common_main').html(mainHtml);
            });
        },
        // 左侧导航
        loadComNav: function(){
            var domNav1 = $('.level_1 li a');   // 一级导航
            var domNav2 = $('.level_2 li a');   // 二级导航
            var navWrap = $('.level_2 .nav_wrap');
            domNav1.bind('click', function(){
                $(this).parent('li').addClass('active').siblings().removeClass('active');
                _nav1Index = $(this).parent('li').index();
                navWrap.removeClass('active').eq(_nav1Index).addClass('active');
                _nav2Index = navWrap.eq(_nav1Index).find('li.active').index()
                main.loadMain(_nav1Index, _nav2Index);
            });
            domNav2.bind('click', function(){
                $(this).parent('li').addClass('active').siblings().removeClass('active');
                _nav2Index = $(this).parent('li').index();
                main.loadMain(_nav1Index, _nav2Index);
            });

        },
        // 头部信息
        loadComHead: function(){

        }
    };
    main.init();
});