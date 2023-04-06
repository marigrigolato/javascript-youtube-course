
function load () {
  let message = document.querySelector('#message')
  let img = document.querySelector('#img')

  let hour = new Date().getHours()
  let minutes = new Date().getMinutes()

  message.innerText = `Agora são ${hour}:${minutes} horas.`
  if (hour >= 0 && hour < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hour >= 12 && hour < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}
