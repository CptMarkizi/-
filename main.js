// const one = document.querySelector('.one')

// // one.style.color='red'
// // one.style.marginLeft = '500px'

// // console.log (one.style)

// let btn = document.querySelector('.btn')
// // btn.onclick = () =>(
//     one.classList.add('black')
// // )

// // one.classList.remove('black')
// btn.onclick = () => {
//     one.classList.remove('black') 
// }
// console.log(one.style)

// let btn = document.querySelector('.btn')


// btn.onclick = function () {
//     this.classList.toggle('black') // смена состояния 
// }

// let btn = document.querySelector('.btn')
// let one = document.querySelector('.one')

// console.log(one.getAttribute('data'))
// one.setAttribute('data-num', 'Naruto')
// btn.onclick = function () {
//     this.classList.toggle('black')
// }

// let genre = document.querySelectorAll('.etty')
// for(let i=0; i < genre.length;i++){
// genre[i].onclick = function(){
// let shop = document.querySelector('.shop').value
// let price = this.getAttribute('data')
// console.log(shop * price)
// }
// }

// ДОМАШНЕЕ ЗАДАНИЕ

const button1 = document.createElement('button');
button1.textContent = 'Нажми меня';
const element = document.querySelector('.element');
const class1 = 'class1';
const class2 = 'class2';
const class3 = 'class3';
button1.addEventListener('click', function() {
  element.classList.add(class1, class2, class3);
});

document.body.appendChild(button1);


button1.addEventListener('click', function() {
    element.classList.add(class1, class2, class3);
    element.addEventListener('click', function() {
      element.classList.remove(class2);
    });
  });
  document.body.appendChild(button1);