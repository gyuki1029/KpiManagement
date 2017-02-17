//requestを投げて受け取った値を表にする
$('#pro_search_button').on('click', function () {
    var params = $('#pro_search_form').serialize();
    //フォームの値をリクエストパラメータにする
    var req = {
        url: '/api/v1/product',
        data: params,
        dataType: 'json'
    }

    console.log(req.url + '?' + req.data);
    $.get(req.url, req.data, function (res_data) {
        //受け取ったときの処理
        hbs_render(res_data, add_button_event);
    }, req.dataType);
});

//handlebars
var hbs_render = function (data, callback) {
    var source = $("#scr_api_response").html();
    var template = Handlebars.compile(source);
    var html = template({ "product": data });
    $("#html_api_response").html(html);
    callback();
};

var add_button_event = function () {
    //詳細ページを押したときの処理
    $("[class$='info_button']").on('click', function () {
        var req = {
            url: '/pro_info',
            data: $(this).parent().serialize()
        }
        console.log(req.url + '?' + req.data);
        window.location.href=req.url +'?' + req.data;
    });
    //更新ページを押したときの処理
    $("[class$='update_button']").on('click', function () {
        var req = {
            url: '/pro_update',
            data: $(this).parent().serialize()
        }
        console.log(req.url + '?' + req.data);
        window.location.href=req.url +'?' + req.data;
    });
};

