// Givet ligning: 2952,351681 = a * b * (80 * 0,51)
const rightSide = 80 * 0.51;
console.log("80 * 0,51 =", rightSide);

const constant = 2952.351681;
console.log("Konstant =", constant);

// Løs ligningen ved at isolere a eller b
const solveForA = (b) => constant / (b * rightSide);
const solveForB = (a) => constant / (a * rightSide);

// Eksempel på mulige løsninger
console.log("\nEksempler på løsninger:");
const testB = [1, 2, 3, 4, 5, 6, 7, 8];
testB.forEach(b => {
    const a = solveForA(b);
    console.log(`Hvis b = ${b}, så a = ${a.toFixed(4)}`);
});

// Verificer løsningerne
console.log("\nVerifikation:");
testB.forEach(b => {
    const a = solveForA(b);
    const result = a * b * rightSide;
    console.log(`reps(R) = ${a.toFixed(4)}, sæt(S) = ${b}, Resultat = ${result.toFixed(4)}`);
});


