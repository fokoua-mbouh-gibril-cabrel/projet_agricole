 var menu = document.querySelector('.menu')
 var close = document.querySelector('.close')
 var anime = document.querySelector('.menu_deroulant')
 //anime.classList.add('roule')
menu.addEventListener('click',()=>{
    anime.style.transform = 'translateX(0%)'
})
close.addEventListener('click',()=>{
    anime.style.transform = 'translateX(-100%)'
}
)