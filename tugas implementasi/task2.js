const reverseWords = (kalimat) => {
    let arr = kalimat.split(" ")
    arr.reverse()
    let hasil = arr.join(" ")
    console.log(hasil)
}

reverseWords("Saya Belajar JavaScript")
