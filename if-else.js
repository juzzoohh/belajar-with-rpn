// let nilai = 100;

// console.log(nilai >= 50) //Hasilnya true or false

// constoh pertama dari if else

// if  (nilai <= 36) { //true or false
//     console.log("Lulus");
// } else if(nilai >= 40){
//     console.log("remedial")
// }
//  else {
//     console.log("tidak lulus");
// }

let nilai = 45;

if (nilai >= 80 && nilai <= 100){
    nilai = "A";
} else if (nilai >= 70 && nilai < 80){
    nilai = "B";
} else if (nilai >= 60 && nilai < 70){
    nilai = "C"
} else {
    nilai = "Remedial"
}

console.log(nilai)

// && Harus semuanya terpenuhi. lalu dia akan menghasilkan nilai TRUE
// || atau or, salah satunya harus terpenuhi, lalu dia akan menghasilkan nilai TRUE

nilai = 50;

let banding = nilai >= 80 && nilai <=100; // antara True or False
console.log(banding, '&& atau dan')

banding = nilai >= 80 || nilai <=100; // antara True or False
console.log(banding, '|| atau or')

let banding3 = nilai != 50
console.log(banding3, '! atau not')

// apa bedanya == dengan ===
let x = 50; //tipe data number
let y = "50" // tipe data string

let banding4 = x == y;
console.log(banding4, '4')

let banding5 = x === y;
console.log(banding5, '5')

// if else bisa kita bikin bersarang juga
let number = "20";
if (number > 5) {
    if(number % 2 == 0){
        console.log("Lebih besar dari 5 dan genap")
    } else{
        console.log("Lebih besar dari 5 dan ganjil")
    }
} else{
    if(number % 2 === 0){
        console.log("Lebih kecil atau sama dengan dari 5 dan genap")
    }else{
        console.log("Lebih kecil atau sama dengan dari 5 dan ganjil")
    }
}