//sidebarのnavigatorをクリックしたときにスクロールする
//ページ内リンク＝aタグ内でhref＝#○○と記入、ページ内移動先＝id=○○と記入
$(function () {
  $('a[href^=\'#\']').click(function () {
    //var offsetY = -25;
    var offsetY = -60;
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + offsetY;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//pro_update
$('#pro_registration_button').on('click', function () {
    var params = $('#pro_registration_form').serialize();
    //フォームの値をリクエストパラメータにする
    var req = {
        url: '/confirm',
        data: params,
    }

    console.log(req.url + '?' + req.data);
    window.location.href=req.url +'?' + req.data;
});

//pro_confirm
$('#pro_confirm_button').on('click', function () {
    var params = $('#pro_confirm_form').serialize();
    //フォームの値をリクエストパラメータにする
    var req = {
        url: '/complete',
        data: params,
    }

    console.log(req.url + '?' + req.data);
    window.location.href=req.url +'?' + req.data;
});
