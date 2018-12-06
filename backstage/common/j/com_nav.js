/**
 * Created by pkk on 2018/12/7.
 */
function loadNav(){
    var navUrl = '../common/com_nav.html';
    $.get(navUrl, {}, function(nav) {
        $('.common_nav').append(nav);
    });
}

$(function(){
    loadNav();
});