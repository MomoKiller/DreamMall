$(function(){
    var _tabIndex = 0;      // TAB 索引
    var _pageIndex = 0;     // 分页索引
    var manage = {
        api: {
            'goodsList': 'https://1cfelhwd48.execute-api.us-east-2.amazonaws.com/api/goods/list'
        },
        init: function(){
            manage.dropdownEvent();     // 下拉选择框事件
            manage.manageEvent();
            manage.newProductEvent();
            manage.loadEditor();
        },
        // 下拉事件
        dropdownEvent(){
            // 下拉选择
            var domDropdown = $('.dropdown-menu li');
            domDropdown.bind('click', function(){
                var _this = $(this);
                var domTxt = _this.find('a').text();
                _this.parents('.dropdown').find('button').html(domTxt + '<span class="caret"></span>');
                _this.parents('.dropdown').find('button').attr('data-val', domTxt);
            });
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
            // 新建
            domNew.bind('click', function(){
                _domManage.css('display', 'none');
                _domNewWrap.css('display', 'block');
            });
            // 刷选
            domScreen.bind('click', function(){
                manage.getList();
            });
            // 排序
            var domStore = $('.manage_wrap .list_wrap .scroll_wrap .thead .td');
            domStore.bind('click', function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        },
        // 获取数据
        getList: function(){
            var d = {
                'name': $('.manage_wrap .screen_wrap .product_name').val(),
                'categoryId': $('#categoryId').attr('data-val'),
                'attribute': $('#attribute').attr('data-val'),
                'status': $('#status').attr('data-val'),
                'orderBy': _pageIndex,
                'sortBy': $('.manage_wrap .scroll_wrap .thead .td.active').attr('data-sortBy')
            };
            $.post(manage.api.goodsList, d, function(data){
                console.log(data);
                if(data && data.rtnCode == '0000'){
                    // 加载列表
                    manage.formateList(data.pageInfo);
                    // 加载分页
                    manage.page(data);
                }else{
                    alert(data.rtnMsg);
                }
            });
        },
        // 加载列表
        formateList(data){
            var listWrap = $('.manage_wrap .list_wrap .scroll_wrap .tbody');
            var tempHtml = '<li>' +
                '<div class="td">' +
                '<input type="checkbox" value="{id}">' +
                '<span class="serial_no">{sortId}</span>' +
                '<div class="img_wrap">' +
                '<img src="{images}" alt="暂无图片" class="img-rounded">' +
                '</div>' +
                '</div>' +
                '<div class="td no_line">' +
                '<label class="product_name">{name}</label>' +
                '<label class="product_type">【物料】</label>' +
                '</div>' +
                '<div class="td">' +
                '<label class="product_price">￥<span>{price}</span></label>' +
                '</div>' +
                '<div class="td no_line">' +
                '<div class="td_wrap">' +
                '<label>访客量:<span class="visitor_num">{view}</span></label>' +
                '<label>浏览量:<span class="browse_num">200</span></label>' +
                '</div>' +
                '</div>' +
                '<div class="td no_line">' +
                '<div class="td_wrap">' +
                '<label class="stock">{store}</label>' +
                '<a class="to_detail">明细</a>' +
                '</div>' +
                '</div>' +
                '<div class="td">' +
                '<label class="sale_num">{totalSalesVolume}</label>' +
                '</div>' +
                '<div class="td">' +
                '<label class="property">{attribute}</label>' +
                '</div>' +
                '<div class="td">' +
                '<label class="create_date">{createTime}</label>' +
                '</div>' +
                '<div class="td">' +
                '<a class="edit_btn">编辑</a>' +
                '<a class="del_btn">删除</a>' +
                '</div>' +
                '</li>';
            var listHtml = '';
            for(var i=0; i< data.length; i++){
                listHtml += attribute(tempHtml, data[i]);
            }
            listWrap.html(listHtml);
        },
        // 加载分页
        page: function(data){
            var pageOption = {
                // list:".list_wrap .tr",                   //列表标识
                currentPage: data.currentPage,              //初始页（选传，默认1）
                pageSize: data.pageSize,                    //每页列表数
                listTotal: data.totalCount,                 //列表总数（选传），不传为list总数
                callback:function(currentPage){             //翻页回调（可填，可做ajax请求）,不传为纯html切换
                    _pageIndex = currentPage;
                    manage.getList();
                }
            };
            $('.page_wrap').paging(pageOption);
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
        },
        // 富文本编辑器
        loadEditor: function(){
            var E = window.wangEditor
            var editor = new E('#editor')
            editor.create()
        }
    };
    manage.init();
});