const bahasaIndonesia = 90
const bahasaInggris = 89
const mtk = 80
const ipa = 69
const rataRata = (bahasaIndonesia + bahasaInggris + mtk + ipa) / 4

if (bahasaIndonesia === undefined || bahasaInggris === undefined || mtk === undefined || ipa === undefined){
    console.log("Data Harus Terisi")
} else{ 
if (rataRata >= 90) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = A")
}  else if (rataRata >= 80) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = B")
}  else if (rataRata >= 70) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = C")
}  else if (rataRata >= 60) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = D")
} else {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = E")
}}