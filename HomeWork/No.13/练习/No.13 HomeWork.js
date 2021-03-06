// 2016/10/14
//
// ============
// 作业 13
//
//
// 本次作业如果做不出来, 可以大家一起讨论一下
// ============
//
var chushi = function(title,message) {
    var temp = `
    <div class="tanChuang">
        <div class="tan-center">
            <div class="tan-title">
                <h1>${title}</h1>
            </div>
            <div class="tan-message">
                    疾风之刃
            </div>
            <input id="id-tan-input" type="text" value="OMG">
            <br>
            <a id="id-tan-OK"     class="tan-ok-color" href="#">好的</a>
            <a id="id-tan-Cancel" class="tan-ok-color" href="#">取消</a>
        </div>
    </div>
    `
    $('body').append(temp)
}

// 作业 1
// title 是 string
// message 是 string
//
// 这个函数生成一个上课所说的弹窗插入页面
// 弹窗包含 title 作为标题 和 message 作为信息
// 还包含一个 OK 按钮
// 点击 OK 按钮关闭弹窗
//
// 实现一个 GuaAlert 函数, 如下

var GuaAlert = function(title, message) {
    chushi(title,message)
    var Event = function( ) {
        $('.tanChuang').remove()
    }
    $( '#id-tan-OK' ).on( 'click', Event )
}
// GuaAlert('你好，这是一个广告','如果你不想看，请点击OK')

// 作业 2
// title 是 string
// message 是 string
// callback 是一个接受一个 bool 类型参数的函数
//
// 这个函数生成一个上课所说的弹窗插入页面
// 弹窗包含 title 作为标题 和 message 作为信息
// 还包含一个 OK 按钮 和一个 Cancel 按钮
// 点击 OK 按钮关闭弹窗, 调用 callback(true)
// 点击 Cancel 按钮关闭弹窗, 调用 callback(false)
//
var callback = function(bool) {
    if (bool) {
        $('.tanChuang').remove()
    }else {
        log('取消按钮')
    }

}

var GuaAlert2 = function(title, message, callback) {
    chushi(title,message)
    var EventNO = function( ) {
        callback(false)
    }
    $( '#id-tan-Cancel' ).on( 'click', EventNO )

    var EventOK = function( ) {
        callback(true)
    }
    $( '#id-tan-OK' ).on( 'click', EventOK )
}

// GuaAlert2('你好，这是一个广告','如果你不想看，请点击OK', callback)

// 作业 3
// title 是 string
// callback 是一个如下的函数
// function(clickOk, input) {
//     // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
//     // input 是 string
// }
//
// 这个函数生成一个上课所说的弹窗插入页面
// 弹窗包含 title 作为标题
// 包含一个 input 让用户输入信息
// 还包含一个 OK 按钮 和一个 Cancel 按钮
// 点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
// 点击 Cancel 按钮关闭弹窗, 调用 callback(false)
//


var callback = function(bool, inputValue) {
    if (bool) {
        log(inputValue)
        $('.tanChuang').remove()
    }else {
        log('取消按钮')
    }
}
var GuaPrompt = function(title, callback) {
    var message = '如果你不想看，请输入OK'
    chushi(title, message)
    var EventNO = function( ) {
        callback(false)
    }
    $( '#id-tan-Cancel' ).on( 'click', EventNO )

    var EventOK = function( ) {
        inputValue = $('#id-tan-input').val()
        callback(true , inputValue)
    }
    $( '#id-tan-OK' ).on( 'click', EventOK )
}
// GuaPrompt('你好，这是一个广告', callback)

// 作业 4
// title 是 string
// actions 是一个包含 string 的数组
// callback 是一个如下的函数
// function(index) {
//     // index 是下标, 具体如下
//     // index 如果是 -1 表明用户点击了 cancel
// }
//
// 这个函数生成一个弹窗页面
// 弹窗包含 title 作为标题
// actions 里面的 string 作为标题生成按钮
// 弹窗还包含一个 Cancel 按钮
// 点击按钮的时候, 调用 callback(index)
//
var tanChuang = function(title, mima) {
    var style = `
        <style>
            /* 弹窗 */
            .tanChuang {
                z-index: 1;
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0.96;
                color: white;
                text-align: center;
            }
            /* 背景 */
            .img-background {
                position:relative;
                top: 50%;
                transform: translateY(-88%);
                z-index: -1;
            }
            #img-background { display: inline-block; }
            /* 居中 */
            .tan-center {
                position:relative;
                top: 50%;
                transform: translateY(-61.8%);
                }
            /* 标题 */
            .tan-title {
                font-size: 1.81em;
                padding: 10px;
            }
            /* 内容框 */
            .tan-message {
                padding: 10px;
            }
            /* 输入框 */
            #id-tan-input {
                font-size: 1.61em;
                color: black;
                text-align: center;
                border-radius: 20px;
            }
            #id-tan-input:focus { outline-style: none; }
            /* 按钮 */
            .pure-button {
                color: white;
                border-radius: 20px;
                background: rgb(51, 103, 214);
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
                font-size: 100%;
            }
        </style>
        `
    var temp = `
        <div class="tanChuang">
            <div class="tan-center">
                <div class="tan-title">${title}</div>
                <div class="tan-message">
                    <input id="id-tan-input" type="text" value="">
                </div>
                <div class="tan-button">
                    <button id="id-tan-OK"     class="pure-button" type="button">知道</button>
                    <button id="id-tan-Cancel" class="pure-button" type="button">母鸡</button>
                </div>
            </div>
            <div class="img-background">
                <img id="img-background pure-img" width="70%" src="imgs/105.Earth.png" alt="background">
            </div>
        </div> `
    $('body').append(style)
    $('body').append(temp)
    $('#id-tan-OK').on('click', function() {
        let value = $('#id-tan-input')[0].value
        if (value === mima) {
            $('.tanChuang').remove()
        }
    })
    $('#id-tan-Cancel').on('click', function() {
        $('.tanChuang').remove()
    })
}
tanChuang('你好，是否知道个人档案密钥','123')