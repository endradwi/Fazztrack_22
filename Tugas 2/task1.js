// 1. Length : Length adalah data dari suatu String yang nilainya berisi panjang string dalam unit kode UTF-16.
const nama = 'Endra'
console.log(nama.length)
// Expected output: 5

// 2. Metode toLowerCase = nilai String mengembalikan string yang diubah menjadi huruf kecil.
const sentence = 'Nama saya endra'
console.log(sentence.toLowerCase())
// Expected output: "nama saya endra"


// 3. Metode trim = nilai String menghilangkan spasi dari kedua ujung string ini dan mengembalikan string baru, tanpa mengubah string asli.
const greeting = '   Hello world!   '
console.log(greeting.trim())
// Expected output: "Hello world!"

// 4. String Split : nilai String mengambil pola dan membagi string ini menjadi daftar substring yang diurutkan dengan mencari polanya, 
// menempatkan substring ini ke dalam array, dan mengembalikan array.
const kalimat = 'ini ibu budi'
const words = kalimat.split(' ')
console.log(words[2])
// output: "Budi"


// 5. String Concat : nilai String menggabungkan argumen string ke string ini dan mengembalikan string baru.
const str1 = 'Hello'
const str2 = 'World'
console.log(str1.concat(' ', str2))
// Expected output: "Hello World"

// 6. Metode toString = Array mengembalikan string yang mewakili array yang ditentukan dan elemen-elemennya.
const array1 = ['kelas', 1 , 'a']
console.log(array1.toString())
// Expected output: "kelas,1,a"

// 7. Metode includes = Array menentukan apakah suatu array memuat nilai tertentu di antara entri-entrinya, 
// mengembalikan true atau false sebagaimana mestinya.
const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat'))
// Expected output: true
console.log(pets.includes('t'))
// Expected output: false

// 8. Array Join = Array membuat dan mengembalikan string baru dengan menggabungkan semua elemen dalam array ini, 
// dipisahkan dengan koma atau string pemisah tertentu. 
// Jika array hanya memiliki satu item, maka item tersebut akan dikembalikan tanpa menggunakan pemisah.
const elements = ['Fire','Air','Water']
console.log(elements.join())
// Expected output: "Fire,Air,Water"
console.log(elements.join('-'))
// Expected output: "Fire-Air-Water"

// 9. Metode push = Array menambahkan elemen yang ditentukan ke akhir array dan mengembalikan panjang array yang baru.
const animals = ['pigs', 'goats', 'sheep']
const count = animals.push('cows')
console.log(count)
// Expected output: 4
console.log(animals)
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// 10. Array Sort : Array ymengurutkan elemen array pada tempatnya dan mengembalikan referensi ke array yang sama, yang sekarang diurutkan.
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
// Expected output: Array ["Dec", "Feb", "Jan", "March"]
