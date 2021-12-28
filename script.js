function carregar(){
  var msg = window.document.getElementById ('msg')
  var img = window.document.getElementById ('imagem')
  var hr = window.document.getElementById('hr')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  msg.innerHTML = `Agora são ${hora} horas e ${min}minutos.`
  if( hora >= 0 && hora < 12) {
    hr.innerHTML = 'BOM DIA!!!'
    img.src = 'manha.png'
    document.body.style.background = '#FCE549'
  } else if ( hora >= 12 && hora < 18 ) {
    hr.innerHTML = 'BOA TARDE!!!'
    img.src = 'tarde.png'
    document.body.style.background = '#A14B22'
  } else { 
    hr.innerHTML = 'BOA NOITE!!!'
    img.src = 'noite.png'
    document.body.style.background =  '#1D1E4B'  }

}
