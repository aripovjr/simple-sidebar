const btn = document.getElementById('btn')
const x = document.querySelector('.x')
const side = document.querySelector('.side-bar')

btn.addEventListener('click', ()=>{
    side.classList.add('show')
})

x.addEventListener('click', ()=>{
    side.classList.remove('show')
})
