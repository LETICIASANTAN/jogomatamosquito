var altura=0
var largura=0
function ajustaTamanhoPalcoJogo(){
    altura=window.innerHeight
    largura=window.innerWidth
    console.log(largura,altura)
 
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaox= Math.floor(Math.random()*largura)-90
    var posicaoy= Math.floor(Math.random()*altura)-90

    posicaox=posicaox<0?0:posicaox
    posicaoy=posicaoy<0?0:posicaoy

    console.log(posicaox,posicaoy)
    //criar o elemento html mosquito
    var mosquito = document.createElement('img')// cria uma variavel mosquito e um elemento em html do tipo imagem
mosquito.src = 'imagens/mosquito.png' //especifica o endereco da imagem(elemento html)
mosquito.style.left= posicaox+'px'//largura em pixels que a imagem tem que aparecer
mosquito.style.top=posicaoy+'px'//altura em pixels que a imagem tem que aparecer
mosquito.style.position='absolute'
mosquito.className = tamanhoAleatorio()

document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    var classe=Math.floor(Math.random()*3)
    switch(classe){
        case 0:
            return 'mosquito1'
            case 1:
                return 'mosquito2'
                case 2:
                    return 'mosquito3'
    }
}


