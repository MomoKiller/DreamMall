// 加载分页
var pageOption = {
    // list:".list_wrap .tr",              //列表标识
    currentPage:1,                      //初始页（选传，默认1）
    pageSize:7,                         //每页列表数
    listTotal:99,                       //列表总数（选传），不传为list总数
    callback:function(currentPage){     //翻页回调（可填，可做ajax请求）,不传为纯html切换
        console.log(currentPage);
    }
};
$('.page_wrap').paging(pageOption);

$(function(){
    var _tabIndex = 0;
    var manage = {
        api: {

        },
        init: function(){
            manage.manageEvent();
            manage.newProductEvent();
        },
        // 商品管理页事件
        manageEvent: function () {
            var _domManage = $('.manage_wrap');
            var _domNewWrap = $('.new_wrap');
            var domNew = $('.manage_wrap .product_btn');
            var domScreen = $('.manage_wrap .screen_btn');
            var domUnderSheet = $('.manage_wrap .uder_btn');
            var domChange = $('.manage_wrap .change_btn');
            var domDelSome = $('.manage_wrap .delsom_btn');

            domNew.bind('click', function(){
                _domManage.css('display', 'none');
                _domNewWrap.css('display', 'block');
            });
        },
        // 切换TAB
        newProductEvent: function(){
            var domTab = $('.new_wrap .tab li');
            var domEditForm = $('.new_wrap .edit_wrap .edit_form');
            domTab.bind('click', function(){
                _tabIndex = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                domEditForm.eq(_tabIndex).addClass('active').siblings().removeClass('active');
            });
        }
    };
    manage.init();
});