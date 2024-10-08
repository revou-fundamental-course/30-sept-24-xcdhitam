/**
* ==04-10-2024==
* ini file js untuk tugas
*/
/* Ciptakan variabel dari elemen id css */
const incelcius = document.getElementById('incelcius');
const outfahrenheit = document.getElementById('outfahrenheit');
const infahrenheit = document.getElementById('infahrenheit');
const outcelcius = document.getElementById('outcelcius');
/* Fungsi konversi dari hasil klik button */
function konversicelcius() { 
    hitungKonversicelcius(); /* Buat fungsi hitung konversi*/  
    kalkulasicelcius(); /* Buat fungsi kalkulasi*/
}
function konversifahrenheit() { 
    hitungKonversifahrenheit(); /* Buat fungsi hitung konversi*/ 
    kalkulasifahrenheit(); /* Buat fungsi hitung konversi*/  
}
/* Fungsi hitung konversi */
function hitungKonversicelcius() {
    const suhu = parseFloat(incelcius.value);
    let hasil;
    hasil = suhu * 9/5 + 32; /* rumus konversi celcius ke fahrenheit */
    
    if (isNaN(hasil)) {
        outfahrenheit.value = "eh... ha...apa itu"; /* pesan jika bukan angka */
    } else {
        outfahrenheit.value = hasil.toFixed(2);
    }
}
function hitungKonversifahrenheit() {
    const suhu = parseFloat(infahrenheit.value);
    let hasil;
    hasil = (suhu - 32) * 5/9; /* rumus konversi fahrenheit ke celcius */
    
    if (isNaN(hasil)) {
        outcelcius.value = "eh... ha...apa itu"; /* pesan jika bukan angka */
    } else {
        outcelcius.value = hasil.toFixed(2);
    }
}
/* Fungsi kalkulasi rumus */
function kalkulasicelcius() {
    const suhu = incelcius.value;
    let calcText;
    calcText = suhu +" * (9/5) + 32 = " + outfahrenheit.value;
    if (outfahrenheit.value === "eh... ha...apa itu") {
        kalcelcius.value = "oh, tidak ada kalkulasi";
    } else {
        kalcelcius.value = calcText;
    }
}
function kalkulasifahrenheit() {
    const suhu = infahrenheit.value;
    let calcText;
    calcText = "("+ suhu +" - 32) * (5/9) = " + outcelcius.value;
    if (outcelcius.value === "eh... ha...apa itu") {
        kalfahrenheit.value = "oh, tidak ada kalkulasi";
    } else {
        kalfahrenheit.value = calcText;
    }
}


function clearAllInputs(event) {
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
 }