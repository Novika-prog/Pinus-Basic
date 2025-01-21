//STRING
//Menghitung Panjang Kata
let kata = 'BELAJAR';
let jumlahKata = kata.length;
console.log("Jumlah huruf dari kata", kata, "adalah...", jumlahKata);

console.log(""); //enter

//Membalik Kata
let kata2 = "JavaScript";
let kata2Terbalik = kata2.split("").reverse().join("");
console.log("Kata asli: " + kata2);
console.log("Kata terbalik: " + kata2Terbalik);

console.log(""); //enter

//GABUNGAN STRING & ARRAY
//Menghitung Frekuensi Karakter
function hitungFrekuensiKarakter(str) {
  const frekuensi = {};
  for (let i = 0; i < str.length; i++) {
    const karakter = str[i];
    if (frekuensi[karakter]) {
      frekuensi[karakter]++;
    } else {
      frekuensi[karakter] = 1;
    }
  }
  return frekuensi;
}
const inputString = "aabccc";
const frekuensiKarakter = hitungFrekuensiKarakter(inputString);
console.log(frekuensiKarakter);

console.log(""); //enter

//split and short
const input = "jeruk apel mangga pisang";
function splitAndSort(str) {
  return str.split(" ").sort();
}

console.log(splitAndSort(input)); 