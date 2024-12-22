const liNav = document.querySelectorAll(".liNav")

liNav.forEach((el,index,array) => {

    const telaInicial = document.querySelector(".telaInicial")
    const telaRecente = document.querySelector(".telaRecentes")
    const telaDestaque = document.querySelector(".telaDestaque")
    const telaSobre = document.querySelector(".telaSobre")
   

    array[0].addEventListener("click",()=>{
        telaInicial.style.display = 'block'
        telaRecente.style.display = 'none'
        telaDestaque.style.display = 'none'
        telaSobre.style.display = 'none'
    })

    array[1].addEventListener("click",()=>{
        telaDestaque.style.display = 'none'
        telaInicial.style.display = 'none'
        telaSobre.style.display = 'none'
        telaRecente.style.display = 'block'
    })

    array[2].addEventListener("click",() =>{
        telaInicial.style.display = 'none'
        telaRecente.style.display = 'none'
        telaSobre.style.display = 'none'
        telaDestaque.style.display = 'block'
    })

    array[3].addEventListener("click",()=>{
        telaInicial.style.display = 'none'
        telaRecente.style.display = 'none'
        telaDestaque.style.display = 'none'
        telaSobre.style.display = 'block'

    })
})

/* ==========ANIMAÇÃO DO THEMA ==========*/

const animationBola = document.querySelector(".animationBola")
const btnTheme = document.querySelector(".btnTheme")


const body = document.querySelector("body")

const menuArrastavel = document.querySelector(".menuArrastavel")
const liMenu = document.querySelectorAll(".menuArrastavel li")
const iconNav = document.querySelectorAll(".iconNav")

const main = document.querySelector("main")
const mainH2 = document.querySelectorAll("main h2")
const mainP = document.querySelectorAll("main p")

const secRecentesP = document.querySelectorAll(".divRecentes > p")

const iconSun = document.querySelector(".iconSun")
const iconMoon = document.querySelector(".iconMoon")
const secSobreH3 = document.querySelectorAll(".secSobre h3")
const divSobre = document.querySelector(".divSobre")
const secSobreP = document.querySelectorAll(".secSobre p")
const ulSobre = document.querySelector(".ulSobre")
const liSobre = document.querySelectorAll(".liSobre")


animationBola.addEventListener("click",()=>{
    animationBola.classList.toggle("themeDark")
    btnTheme.classList.toggle("btnThemeDark")

    iconSun.classList.toggle("iconSunAtivo")
    iconMoon.classList.toggle("iconMoonDesativo")

    body.classList.toggle("bodyDark")



   menuArrastavel.classList.toggle("menuDark")
   liMenu.forEach((elemento)=>{
    elemento.classList.toggle("liMenuDark")
   })
   iconNav.forEach((elemento)=>{
    elemento.classList.toggle("iconNavDark")
   })

   main.classList.toggle("mainDark")

   mainH2.forEach((elemento)=>{
    elemento.classList.toggle("mainH2Dark")
   })

   mainP.forEach((elemento)=>{
    elemento.classList.toggle("mainPDark")
   })

   secRecentesP.forEach((elemento) => {
    elemento.classList.toggle("recentePDark")
   })

  divSobre.classList.toggle("divSobreDark")

  secSobreH3.forEach((elemento) =>{
    elemento.classList.toggle("secSobreH3Dark")
  })

  ulSobre.classList.toggle("ulSobreDark")

  liSobre.forEach((elemento) =>{
    elemento.classList.toggle("liSobreDark")
  })

})

/* =========== ANIMAÇÃO AO SCROLLAR ============= */

const allJsScroll = document.querySelectorAll(".js-scroll")
const windowMetade = window.innerHeight * 0.5
window.addEventListener("scroll",()=>{
    allJsScroll.forEach((elemento)=>{
        const elTop = elemento.getBoundingClientRect().top - windowMetade
        if(elTop < 0){
           elemento.classList.add("jsScrollAtivo")
        } else{
            // elemento.classList.remove("jsScrollAtivo")
        }
    })
})