/**
 * Created by pkk on 2018/12/3.
 */
$(function(){
    var _formDom = {
        _loginForm: $('.login_form'),
        _weChartForm: $('.weChart_form'),
        _bindForm: $('.bind_form')
    };
    var login = {
        api:{

        },
        init: function(){
            login.loginFormEvent();
            login.weChartFormEvent();
            login.weChartBindEvent();
        },
        // 帐号密码事件绑定
        loginFormEvent: function(){
            var loginBtn = $('.login_form .login_btn');
            var dropBtn = $('.login_form .drop_btn');
            var toWeChartBtn = $('.login_form .toWeChart');
            // 登录
            loginBtn.bind('click', function(){

            });
            // 跳转主页
            dropBtn.bind('click', function(){

            });
            // 微信登录
            toWeChartBtn.bind('click', function(){
                _formDom._loginForm.css('display', 'none');
                _formDom._weChartForm.css('display', 'block');
                _formDom._bindForm.css('display', 'none');
            });
        },
        // 微信登录
        weChartFormEvent: function(){
            var toLoginBtn = $('.weChart_form .toLogin_btn');
            toLoginBtn.bind('click', function(){
                _formDom._loginForm.css('display', 'block');
                _formDom._weChartForm.css('display', 'none');
                _formDom._bindForm.css('display', 'none');
            });
        },
        // 微信绑定
        weChartBindEvent: function(){
            var bindBtn = $('.bind_form .bind_btn');
            bindBtn.bind('click', function(){

            });
        }
    };
    login.init();
});