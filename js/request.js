//页面加载所要进行的操作
// ajax封装
function ajax(url, type, data, success, error) {
    // var type = type || 'get';//请求类型
    // // var dataType = dataType || 'json';//接收数据类型
    // // var async = async || true;//异步请求
    // var cache = cache || false;//浏览器历史缓存
    // var success = success || function (data) {
    //         /*console.log('请求成功');*/
    //         setTimeout(function () {
    //         },500);
    //         if(data.status){//服务器处理成功
    //             setTimeout(function () {
    //                 if(data.url){
    //                     location.replace(data.url);
    //                 }else{
    //                     location.reload(true);
    //                 }
    //             },1500);
    //         }
    //     };
    // var error = error || function (data) {
    //         /*console.error('请求成功失败');*/
    //         /*data.status;//错误状态吗*/
    //         // setTimeout(function () {
    //             if(data.status == 404){
    //                 console.log('请求失败，请求未找到');
    //             }else if(data.status == 503){
    //                 console.log('请求失败，服务器内部错误');
    //             }else {
    //                console.log('请求失败,网络连接超时');
    //             }
    //         // },500);
    //     };
    $.ajax({
        'url': '/haier' + url,
        // 'url': 'http://10.206.73.149:8080' + url,
        'data': data,
        'type': type,
        'dataType': 'json',
        'async': false,
        'success': success,
        'error': error,
        'timeout': 60000,
        headers: {
            'Content-Type': 'application/json'
        },
        'beforeSend': function () {
            // console.log('加载中')
        },
    });
}


// ajax提交(post方式提交)
// function post(url, data, success, cache, alone) {
//     ajax(url, data, success, cache, alone, false, 'post','json');
// }
//
// // ajax提交(get方式提交)
// function get(url, success, cache, alone) {
//     ajax(url, {}, success, alone, false, true,'get','json');
// }

// // jsonp跨域请求(get方式提交)
// function jsonp(url, success, cache, alone) {
//     ajax(url, {}, success, cache, alone, false, 'get','jsonp');
// }