//Criar um programa que mostre conceitos A B C ou D de acordo com as notas: >9.5 A; Entre 9.4 e 8.5 B; Entre 8.4 e 7.0 C; <6.9 D;

let nota = 8.7;

console.log(`Nota: ${nota}`);

if (nota >= 9.5) {
    console.log("A");
} else if (nota >= 8.5) {
    console.log("B");
} else if (nota >= 7.0) {
    console.log("C");
} else {
    console.log("D");
}