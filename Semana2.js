// Inicializando
var nota1 = 3;
var nota2 = 4;
var nota3 = 5;
// Calculando a média
var media = (nota1 + nota2 + nota3) / 3;
// Implementando o primeiro condicional em while com um break pra sair do código e printar no console
while(media >= 7.0){
    console.log("Aluno APROVADO ☑️. Sua média é: " + media.toFixed(2));
    break;
}

// Implementando o segundo condicional em while com um break pra sair do código e printar no console
while(media < 7){
    console.log("Aluno REPROVADO ❎. Sua média é: " + media.toFixed(2));
    break;
}
