let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let four = document.querySelector('.four')
let fifth = document.querySelector('.fifth')
let firB = document.querySelector('.firB')
let secB = document.querySelector('.secB')
let thiB = document.querySelector('.thiB')
let forB = document.querySelector('.forB')
let fifB = document.querySelector('.fifB')

firB.onclick = function () {
    first.style.display = 'block'
    second.style.display = 'none'
    third.style.display = 'none'
    four.style.display = 'none'
    fifth.style.display = 'none'
}

secB.onclick = function () {
    first.style.display = 'none'
    second.style.display = 'block'
    third.style.display = 'none'
    four.style.display = 'none'
    fifth.style.display = 'none'
}
thiB.onclick = function () {
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'block' 
    four.style.display = 'none'
    fifth.style.display = 'none'

}
forB.onclick = function () {
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'none' 
    four.style.display = 'block'
    fifth.style.display = 'none'

}
fifB.onclick = function () {
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'none' 
    four.style.display = 'none'
    fifth.style.display = 'block'

}


// const button = document.querySelectorAll('button');
// const ele = document.querySelectorAll('.modal-body div')
// button.forEach((itemBtn) => {
//     ele.forEach((item) => {
//         itemBtn.addEventListener('click', function(e){
//             if(e.target.className.includes(item.className)) {
//                 item.classList.add("hey")
//                 console.log(item.className)
//             }
//         }) 
//     })
// });


