const form = document.getElementById('form-demo')

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl, option)
})

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const formElem = e.currentTarget

    let formData = new FormData()
    formData.append('email', formElem.email.value)
    formData.append('hot_org_name', formElem.organization.value)
    formData.append('name', formElem.fio.value)
    formData.append('city', formElem.city.value)
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