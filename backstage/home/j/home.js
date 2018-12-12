/**
 * Created by pkk on 2018/12/6.
 */
$(function(){
    var main = {
        api: {
            /**** 单页面URL *****/
            surveyUrl: '../survey/survey.html',
            productManageUrl: '../product/product_manage.html',
            productClassUrl: '../product/product_class.html',
            productDeliveryUrl: '../product/product_delivery.html',
            productGiveUrl: '../product/product_give.html',
            customerManageUrl: '../customer/customer_manage.html',
            customerOrganizeUrl: '../customer/customer_organize.html',
            orderAllUrl: '../order/order_all.html',
            orderRecordUrl: '../order/order_record.html',
            dataFlowUrl: '../data/data_flow.html',
            dataExchangeUrl: '../data/data_exchange.html',
            dataProductUrl: '../data/data_product.html',
            dataSaleUrl: '../data/data_sale.html',
            dataIncomeUrl: '../data/data_income.html',
            settingStaffUrl: '../setting/setting_staff.html',
            settingBannerUrl: '../setting/setting_banner.html',
            settingMsgUrl: '../setting/setting_msg.html',
            settingOrderUrl: '../setting/setting_order.html',
            settingInfoUrl: '../setting/setting_info.html',
            settingReminderUrl: '../setting/setting_reminder.html',
            settingDialogUrl: '../setting/setting_dialog.html'
            
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
            var domLi = $('.common_nav>ul>li>a');
            var domLiSec = $('.common_nav li .level_2 a');
            var index1 = 0;
            var index2 = 0;
            // 一级菜单事件
            domLi.bind('click', function(){
                var _this = $(this).parent('li');
                index1 = _this.index();
                if(_this.find('.level_2').length > 0){  // 有二级菜单
                    $('.common_nav>ul>li').removeClass('active');
                    if(_this.find('.level_2').is(':hidden')){       //展示
                        _this.find('.level_2').css('display', 'block');
                        //$(this).find('i').addClass('glyphicon-triangle-bottom').removeClass('glyphicon-triangle-right');
                        // 展示二级菜单的第一个
                        domLiSec.removeClass('active');
                        _this.find('.level_2 a').eq(0).addClass('active');
                        main.loadMain(index1, index2);
                    }else{
                        _this.find('.level_2').css('display', 'none');
                        //$(this).find('i').addClass('glyphicon-triangle-right').removeClass('glyphicon-triangle-bottom');
                    }
                }else{      // 一级菜单
                    domLiSec.removeClass('active');
                    _this.addClass('active').siblings().removeClass('active');
                    main.loadMain(index1, index2);
                }
            });
            // 二级菜单事件
            domLiSec.bind('click', function(){
                var _this = $(this);
                $('.common_nav>ul>li').removeClass('active');
                domLiSec.removeClass('active');
                _this.addClass('active').siblings().removeClass('active');
                main.loadMain(_this.parents('li').index(), _this.index());
            });
        },
        // 头部信息
        loadComHead: function(){

        }
    };
    main.init();
});