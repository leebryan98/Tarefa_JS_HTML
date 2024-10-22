const form = document.getElementById('form-result') /*dando valor dentro da const*/
let formEValido = false; /*verdadeiro ou falso*/

function numberValid (formA, formB) {
    return formB > formA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formA = parseFloat(document.getElementById('campoA').value);
    let formB = parseFloat(document.getElementById('campoB').value);

    mensagemSucesso = `Formulário enviado com sucesso! Número do campo A: <b>${formA}</b>, foi menor que o número do campo B: ${formB}</b>`;
    containerMensagemSucesso = document.querySelector('.success-message');

    formEValido = numberValid(formA, formB);

    if (formEValido){
        document.querySelector('.error-message').style.display = 'none';
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        formA.value = ' ';
        formB.value = ' ';
    } else {
        document.querySelector('.error-message').style.display = 'block'
        containerMensagemSucesso.style.dislay = 'none';
    }
})