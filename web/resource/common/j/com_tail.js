/**
 * Created by pkk on 2018/12/5.
 */
function loadTail(){
    var headUrl = '../resource/common/com_tail.html';
    $.get(headUrl, {}, function(tail) {
        $('.common_tail').append(tail);
    });
}

$(function(){
    loadTail();
});