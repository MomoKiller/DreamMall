/**
 * Created by pkk on 2018/12/6.
 */
$(function(){
    var login = {
        api: {
            loginUrl: ''
        },
        init: function(){
            login.bindEvent();
        },
        bindEvent: function(){
            var domLoginBtn = $('.login_form .login_btn');
            domLoginBtn.bind('click', function(){
                location.href = '../home/home.html';
            });
        }
    };
    login.init();
});