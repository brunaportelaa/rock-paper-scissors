document.getElementById('user-choice').addEventListener('submit', e => {
    e.preventDefault()
    let select = document.getElementById('option')
    let option = select.value
    console.log(option)
})