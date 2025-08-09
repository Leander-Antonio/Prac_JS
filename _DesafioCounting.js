function countSort(arr) {
    const tamanho = arr.length;

    for (let index = 0; index < tamanho/2; index += 1) {
        arr[index][1] = '-';
    }

    let numeroMax = 0;
    for (let index = 0; index < tamanho; index += 1) {
        let numero = parseInt(arr[index][0]);
        if (numero > numeroMax) {
            numeroMax = numero;
        }
    }

    let listas = new Array(numeroMax + 1);
    for (let index = 0; index <= numeroMax; index += 1) {
        listas[index] = [];
    }

    for (let index = 0; index < tamanho; index += 1) {
        let numero = parseInt(arr[index][0]);
        listas[numero].push(arr[index][1]);
    }

    let resultado = [];
    for (let index = 0; index <= numeroMax; index += 1) {
        resultado = resultado.concat(listas[index]);
    }

    console.log(resultado.join(' '));
}


const input = [
    ["0", "ab"],
    ["6", "cd"],
    ["0", "ef"],
    ["6", "gh"],
    ["4", "ij"],
    ["0", "ab"],
    ["6", "cd"],
    ["0", "ef"],
    ["6", "gh"],
    ["0", "ij"],
    ["4", "that"],
    ["3", "be"],
    ["0", "to"],
    ["1", "be"],
    ["5", "question"],
    ["1", "or"],
    ["2", "not"],
    ["4", "is"],
    ["2", "to"],
    ["4", "the"]
];

countSort(input);
