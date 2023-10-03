const form = document.getElementById('form-market')
const mailMes = document.querySelector('.mail-sended')

// var toastElList = [].slice.call(document.querySelectorAll('.toast'))
// var toastList = toastElList.map(function(toastEl) {
//     return new bootstrap.Toast(toastEl, option)
// })

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const formElem = e.currentTarget

    let formData = new FormData()
    formData.append('fio', formElem.fio.value)
    formData.append('org_name', formElem.org_name.value)
    formData.append('phone', formElem.phone.value)

    let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
    })

    let result = await response.json();

    console.log(result)

    if(result) {
        // toastList[0].show
        mailMes.classList.remove('hide')
        mailMes.innerHTML = 'Ваш запрос отправлен!'

        setTimeout(() => {
            mailMes.classList.add('hide')
        }, 5000)
    } else {
        mailMes.classList.remove('hide')
        mailMes.innerHTML = 'Ваш запрос не отправлен'

        setTimeout(() => {
            mailMes.classList.add('hide')
        }, 5000)
    }

    form.reset()
})