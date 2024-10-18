const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//const devchu = document.getElementById("devchu");
//devchu.addEventListener("click",()=>{
//})

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", ()=> {

        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto")

        const idPokeDevSelecionado =  pokedev.attributes.id.value;
        const idDoCartaoPokeDevParaAbrir = "cartao-" + idPokeDevSelecionado;
        const cartaoPokeDevParaAbrir = document.getElementById(idDoCartaoPokeDevParaAbrir);
        cartaoPokeDevParaAbrir.classList.add("aberto");


        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");

        const pokeDevSelecionadoNaListagem = document.getElementById(idPokeDevSelecionado);
        pokeDevSelecionadoNaListagem.classList.add("ativo");



    })
})