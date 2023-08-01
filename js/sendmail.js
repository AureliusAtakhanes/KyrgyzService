function SendMail(){
    var params = {
        name : document.getElementById('name').value,
        surname : document.getElementById('surname').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        message : document.getElementById('message').value
    }

    emailjs.send("service_vz96mev", "template_18e6vlj", params).then(function(res){
        alert('Ваше письмо успешно отправлено, ожидайте ответа!')
    })
}