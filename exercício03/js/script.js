
function count () {

  let start = document.getElementById('start')
  let end = document.getElementById('end')
  let step = document.getElementById('step')
  let message = document.getElementById('message')

  message.innerText = ''

  if (start.value == '' || end.value == '' || step.value == '') {
    message.innerText = 'Impossível contar!'
  } else {
    message.innerText = 'Contando:\n'
    let i = Number(start.value)
    let j = Number(step.value)
    let k = Number(end.value)

    if (j <= 0) {
      alert('Passo inválido! Considerando PASSO 1')
      j = 1
    }

    if (i < k) {
      for (let cont = i; cont <= k; cont += j) {
        message.innerText += `${cont} \u{1F449}`
      }
    } else {
      for (let cont = i; cont >= k; cont -= j) {
        message.innerText += `${cont} \u{1F449}`
      }
    }
    message.innerText += `\u{1F3C1}`

  }
}
