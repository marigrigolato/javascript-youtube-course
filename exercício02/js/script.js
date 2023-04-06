
function verificar () {

  let getFullYear = new Date().getFullYear();
  let year = document.getElementById('year')

  let message = document.getElementById('message')

  if (year.value.length === 0 || year.value > getFullYear) {
    alert('Verifique os dados e tente novamente!')
  } else {

    let radsex = document.getElementsByName('radsex')
    let img = document.getElementById('img')
    let idade = getFullYear - Number(year.value);
    let sexo = ''

    if (radsex[0].checked) {
      sexo = 'Homem'
      if(idade >= 0 && idade < 10) {
        img.src = "foto-bebe-m.png"
      } else if (idade >= 10 && idade < 21) {
        img.src = "foto-jovem-m.png"
      } else if (idade >= 21 && idade < 50) {
        img.src = "foto-adulto-m.png"
      } else {
        img.src = "foto-idoso-m.png"
      }
    } else {
      sexo = 'Mulher'
      if(idade >= 0 && idade < 10) {
        img.src = "foto-bebe-f.png"
      } else if (idade >= 10 && idade < 21) {
        img.src = "foto-jovem-f.png"
      } else if (idade >= 21 && idade < 50) {
        img.src = "foto-adulto-f.png"
      } else {
        img.src = "foto-idoso-f.png"
      }
    }

    message.innerText = `Detectamos! ${sexo} com ${idade} anos.`

  }

}
