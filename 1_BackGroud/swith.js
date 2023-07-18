var data = new Date()
var dia = data.getDate()
var semana = data.getDay()
console.log(`Hoje é ${dia}/${data.getMonth()+1}`)
switch(semana){
    case 0: 
        console.log("Domingo")
        break
    case 1: 
        console.log("Segunda-feira")
        break
    case 2: 
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira, Jogo gratis na epic")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[ERROR]")
}