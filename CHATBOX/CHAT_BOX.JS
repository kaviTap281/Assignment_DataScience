function openChat() {
    document.getElementById('chatbox').style.display='block';
    $('.btnchat').hide();
}

function closeChat() {
    document.getElementById('chatbox').style.display='none';
    $('.btnchat').show();
}

$('form').submit(function() {
    var text=$(this).find("textarea[name='msg']").val();

    alert(text);
});