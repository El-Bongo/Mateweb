const $form = document.querySelector('#form')
const $btnMailTo = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(ev){
    ev.preventDefault()
    const form = new FormData(this)
    $btnMailTo.setAttribute("href",`mailto:desarrollo@mate-web.com?subject= Nombre:${form.get('name')} Correo:${form.get('e-mail')}&body=${form.get('message')}`)
    $btnMailTo.click()
}
