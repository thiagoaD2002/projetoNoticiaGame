const liNav = document.querySelectorAll(".liNav")

liNav.forEach((el,index,array) => {

    const telaInicial = document.querySelector(".telaInicial")
    const telaRecente = document.querySelector(".telaRecentes")

   

    array[0].addEventListener("click",()=>{
        telaInicial.style.display = 'block'
        telaRecente.style.display = 'none'
    })

    array[1].addEventListener("click",()=>{
        telaInicial.style.display = 'none'
        telaRecente.style.display = 'block'
    })
})