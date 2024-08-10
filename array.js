let array = [1,2,3,4,5,6];

console.log(array)

// Pada array lita bisa menampung banyak data dan tipe data yang berbeda
// Contohnya
let array2 = [1, "array", [1,2,3], {name: 'test'}, null, undefined, false];

// Array itu ada 2 jenis
// Array 1 Dimensi dan Array 2 Dimensi

let dimensi1 = [1,2,3,4,5,6] // array dimensi 1
let dimensi2 = [[1,2,3],[4,5,6]] // array dimensi 2

// cara mengakses array
// Menggunakan Index
console.log(dimensi1[2]) // 3
console.log(dimensi1[4]) // 5

console.log(dimensi2[0]) //[1,2,3]
console.log(dimensi2[1]) //[4,5,6]

console.log(dimensi2[0][0]) //1
console.log(dimensi2[1][0]) //4

// cara melooping array 2 dimensi 
console.log("==============")
for (let i = 0; i < dimensi2.length; i++){
    for(let j = 0; j < dimensi2[i].length; j++){
        console.log(dimensi2[i][j])
    }
}

// Normalnya array dimensi 2 sering digunakan pada kasus TABEL
/*
Contohnya
[
    ["Bryan","David","Jhon"]
    ["Nanda","Davis", "Rick"]
]

*/

let orang = [
    ["Bryan","Inggris","25"], //INGAT WAJIB KOMA! JANGAN LUPAA
    ["Nanda","Canada", "19"]
];
console.log("Biografi")
for (let i = 0; i < orang.length; i++){
    for(let j = 0; j < orang[i].length; j++){
        if (j === 0){
            console.log(`Name: ${orang[i][j]}`)
        } else if (j === 1){
            console.log(`Live: ${orang[i][j]}`)
        }else {
            console.log(`Age: ${orang[i][j]}`)
        }
    }
    console.log(' ')
}