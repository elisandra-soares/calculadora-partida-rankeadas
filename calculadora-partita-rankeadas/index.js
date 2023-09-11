//for(let i=0; i<=10; i++) console.log(i);



function verificarVitorias(vitorias){
    if(vitorias < 10){
        return "Ferro"
    }else if (vitorias >= 11 && vitorias <= 20){
        return "Bronze"
    }else if (vitorias >= 21 && vitorias <= 50){
        return "Prata"
    }else if (vitorias >= 51 && vitorias <= 80){
        return "Ouro"
    }else if (vitorias >= 81 && vitorias <= 90){
        return "Diamante"
    }else if (vitorias >= 91 && vitorias <= 100){
        return "Lendário"
    }else {vitorias >= 91 && vitorias <= 101}
        return "Imortal"
}


let resultado = verificarVitorias (88)
console.log(resultado)



