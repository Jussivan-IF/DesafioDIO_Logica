var Nome = prompt("Informe o nome do Héroi: ");
var XP = prompt("Informe o XP do Héroi: ");
var Nível;

if(XP <= 1.000) {
    Nível = "Ferro";
} else if(XP>=1001 && XP<=2000) {
    Nível = "Bronze";
} else if(XP>=2001 && XP<=5000) {
    Nível = "Prata";
} else if(XP>=5001 && XP<=7000) {
    Nível = "Ouro";
} else if(XP>=7001 && XP<=8000) {
    Nível = "Platina";
} else if(XP>=8001 && XP<=9000) {
    Nível = "Ascendente";
} else if(XP>=9001 && XP<=10000) {
    Nível = "Imortal";
} else {
    Nível = "Radiante";
}

document.write(`O Herói de nome ${Nome} está no nível de ${Nível}`);