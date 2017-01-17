var Form = BUI.Form;
new Form.HForm({
    srcNode: '#login-form',
    submitType: 'ajax',
    method: 'post',
    action: '/admin/login',
    callback: function(data){
        var form = this;
        if(!data.sucess && data.errors){
            BUI.each(data.errors,function(v,k){
                var field = form.getField(k);
                if(field){
                    field.showErrors([v]);
                }
            });
        } else {
            window.location.href = '/admin/index';
        }
    }
}).render();

// 逗你玩
var words = ['你确定你想要账号吗','你一定你想要账号吗','你肯定你想要账号吗','那好吧'];
var index = 0;
var length = words.length;
function show(){
    var word = words[index];
    var type = '';
    if (index < length - 1) {
        type = 'question';
    } else if (index === length - 1) {
        type = 'success';
    } else {
        word = '你想得美！哈哈！';
        type = 'error';
    }
    
    BUI.Message.Alert(word, function(){
        if (type === 'error') {
            index = 0;
        } else {
            index++;
            setTimeout(function(){
                show();
            });
        }
    },type);
}
$('#getAccount').on('click', function(){
    show();
});
