const form = document.getElementById('form-demo')

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

    if(result == 'true') {
        toastList[0].show
    }

    form.reset()
})