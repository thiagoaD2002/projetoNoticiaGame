const liNav = document.querySelectorAll(".liNav")

liNav.forEach((el,index,array) => {

    const telaInicial = document.querySelector(".telaInicial")
    const telaRecente = document.querySelector(".telaRecentes")
    const telaDestaque = document.querySelector(".telaDestaque")
   

    array[0].addEventListener("click",()=>{
        telaInicial.style.display = 'block'
        telaRecente.style.display = 'none'
        telaDestaque.style.display = 'none'
    })

    array[1].addEventListener("click",()=>{
        telaDestaque.style.display = 'none'
        telaInicial.style.display = 'none'
        telaRecente.style.display = 'block'
    })

    array[2].addEventListener("click",() =>{
        telaInicial.style.display = 'none'
        telaRecente.style.display = 'none'
        telaDestaque.style.display = 'block'
    })
})