function cekPalindrom(kata) {
    const data = kata.toLowerCase()
    const hasil = data.split("").reverse().join("")

    if (hasil === data) {
        console.log("Palindrom")
    } else {
        console.log("Bukan Palindrom")
    }
}

cekPalindrom("Malam");
