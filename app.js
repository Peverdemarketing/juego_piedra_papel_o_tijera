
function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
// 1
let jugador = 0
let pc = aleatorio(1 , 3)
let victorias = 0
let derrotas = 0


while (victorias < 3 && derrotas < 3) {
    let pc = aleatorio(1 , 3)
    jugada = prompt("elige 1 para Piedra 🪨, 2 para Tijera ✂️, 3 para papel 🗞️")


    function eleccion (jugada) {
        let resultado = ""
        if (jugada == 1) {
            resultado = 'Piedra 🪨'
        }
        else if (jugada == 2) {
            resultado = "Tijera ✂️"
        }
        else if (jugada == 3) {
            resultado = "Papel 🗞️"
        }
        else {
            resultado = "💔❌ NO ELEGISTE BIEN   ❌💔" 
        }
        return resultado
    
    }

    // Combate

    // simplifica el codigo seleccionar las opciones en las que gano
    if(jugada == pc) {
        alert("👀 Empate 🤝 ")
        } 
        else if((jugada == 1 && pc == 2) || (jugada == 2 && pc ==3) || (jugada == 3 && pc == 1)) {
        victorias = victorias +1; 
        alert(`🏆🏆🏆 Ganaste esta ronda llevas   🏆🏆🏆 ${victorias}`)
        alert("🤖 PC elige:" + eleccion((pc)) + " y " + " 🏋 jugador elige: " + eleccion((jugada)))
        }
        else 
        {
        derrotas = derrotas +1;
        alert(` 👎😱😱😱  Perdiste esta ronda 😱😱😱 👎 llevas perdidos ${derrotas}`)
        alert("🤖 PC elige:" + eleccion((pc)) + " y " + " 🏋 jugador elige: " + eleccion((jugada)))
        }
}

    if (victorias > 2) {
        alert(`🏆🏆🏆 Ha finalizado el JUEGO HAS GANADO 🏆🏆🏆 ${victorias} veces y has perdido ${derrotas} `) 
    }

    else if (derrotas > 2) {
            alert(`GAME OVER Ha finalizado el JUEGO HAS ganado tan solo ${victorias} veces y has PERDIDO 😱😱😱 ${derrotas} `)
        }
    


        
    

        // alert("🤖 PC elige:" + eleccion((pc)) + " y " + " 🏋 jugador elige: " + eleccion((jugada)))

    

