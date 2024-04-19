//Seu JavaScript de validação aqui

function enviarMensagem() {
    let nome = getTextById('nome')
    let email = getTextById('email')
    let assunto = getTextById('assunto')
    let mensagem = getTextById('mensagem')
    
    if (nome == '') {
        alert("Insira um texto no campo do nome!")
    } else if (email == '' || !email.includes('@')) {
        alert('Insira um email valido!')
    } else if (assunto == '') {
        alert('Insira o assunto do email!')
    } else if (mensagem == '') {
        alert('Insira a mensagem do email!')
    } else {
        alert(`Um email será enviado pelo nome de ${nome} e email ${email}, com o assunto: "${assunto} e mensagem: ${mensagem}"`)
    }
}

function getTextById(id) {
    return document.getElementById(id).value
}
