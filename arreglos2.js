let juegos = ['zelda', 'mario', 'runaterra'];
console.log(juegos.length);
let primero = juegos[0];
let ultimo = juegos[2];
console.log({ primero, ultimo });
juegos.forEach(( elemento, indice, arr ) => {
    console.log({ elemento, indice, arr });
});
// agragar un nuevo elemento\
let nuevaLong = juegos.psh('f-zero');
console.log({ nuevaLong, juegos });
juegos.unshift();