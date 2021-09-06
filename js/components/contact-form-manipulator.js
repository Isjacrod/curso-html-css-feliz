// Get send button and add a listener
const sendButton = document.getElementById('contact_form_send');
sendButton.addEventListener('click', validateForm);

// Validate form function
function validateForm(ev) {     
    // Clean errors
    let errorsElements = document.querySelectorAll('.ERROR_MESSAGE')
    for (let el of errorsElements) {
        el.remove();
    }

    // validate
    let name = document.getElementById('contact_name');
    if (name.value == '')
        name.insertAdjacentHTML('afterend', `<p class="ERROR_MESSAGE">Digite um nome</p>`);
    let email = document.getElementById('contact_email');
    let emailRegex = /^[\w.]+@[\w.]+$/;
    if (! emailRegex.test(email.value))
        email.insertAdjacentHTML('afterend', `<p class="ERROR_MESSAGE">E-mail inválido</p>`);

    let message = document.getElementById('contact_message')
    if (message.value == '')
        message.insertAdjacentHTML('afterend', `<p class="ERROR_MESSAGE">Mensagem vazia</p>`);

    // Is there any errors?
    errorsElements = document.querySelectorAll('.ERROR_MESSAGE');
    if (errorsElements.length == 0)
        alert("Mensagem Enviada");
    else{
        ev.preventDefault();
        errorsElements[0].previousElementSibling.focus();
        alert("Preencha todos os campos")
    }     
}