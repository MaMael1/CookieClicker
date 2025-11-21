const numCookies = document.querySelector("#numCookies");
const imgCookie = document.querySelector("#imgCookie");

//valor do placar
let totalcookies = 0
numCookies.value = totalcookies;

imgCookie.addEventListener("click", atualizarJogo)

function addNumCookies(){
    //atualizando valor total
    totalcookies = totalcookies + 1
    //mostrando valor no placar
    numCookies.value = totalcookies
}

function atualizarJogo() {
    
    addNumCookies()

    // regras do jogo
    if(totalcookies>=10) {
        const imgCursor = document.querySelector("#imgCursor")
        imgCursor.style.borderColor = "black";
    }

}