//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

let button1 = document.querySelector('#button1')

 button1.onclick = () => {
  let colorIndex = Math.floor(Math.random() * 6)
   document.querySelector('body').style.backgroundColor = colors[colorIndex]
   button1.innerHTML = colors[colorIndex]
}


let button2 = document.querySelector('#button2')

button2.onclick = () => {

  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.querySelector('body').style.backgroundColor = '#' + randomColor
  button2.innerHTML = '#' + randomColor
}

