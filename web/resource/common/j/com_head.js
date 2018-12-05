/**
 * Created by pkk on 2018/12/5.
 */
function loadHead(){
    var headUrl = '../resource/common/com_head.html';
    $.get(headUrl, {}, function(head) {
        $('.common_head').append(head);
    });
}

$(function(){
    loadHead();
});