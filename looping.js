// while
// for

// let i = 0;
// while (i <= 5){
//     console.log(i)
//     i++
// }
// console.log("-------------")
// i = 5;
// while (i >= 0){
//     console.log(i)
//     i--
// }

// HATI HATI DENGAN INFINITE LOOP!!!
// dalam looping ada yang namanya arah. Kiri atau Kanan
// Kiri itu Pengurangan 
// Kanan itu Pertambahan

// contoh for loop
// for (let i = 5; i >= 1; i--){
//     console.log(i)
// }
// console.log("============")
// for (let i = 1; i <= 5; i++){
//     console.log(i)
// }

// Method Lenght, ini berlaku hanya untuk String dan Array
// Method Lenght itu mengembalikan angka, 
// total huruf yang ada pada string, atau total element yang ada pada Array
// let name = "bryan";
// for (let i = 0; i < name.length; i++){
//     console.log(name[i])
// }

// Oke jadi, pada tipe data String atau Array di JavaScript, ada yang namanya Indexing
// Dimana Index itu SUDAH PASTI dimulai dari 0
// contoh
// let name = "brayn" 
// console.log(name[0], name[4]) // b n

// diberikan kasus untuk mengembalikan suatu kata, tanpa menggunakan Methode Reverse

// let name = "agus"; //leghtnya 4, a=0, g=1, u=2, s=3
// let result = "";

// for (let i = name.length - 1; i >= 0; i--){ // i = 4 - 1; 4 - 1 >= 0; i--
//     result += name[i];
// }
// console.log(result)

// Nested Loop
for (let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        console.log(j)
    }
    console.log(" ")
}

// Kesimpulannya Looping sering bertemu dengan method lenght
// Looping itu agar membuat code menjadi lebih pendek
// Looping itu agar membuat suatu proses menjadi lebih Dinamis