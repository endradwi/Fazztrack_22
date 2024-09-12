function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
    else if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } 
    else {
        const result = []

        for (let i = 0; i < dataArray.length; i++) {
            const num = dataArray[i];
            if (num > nilaiAwal){
                if (num < nilaiAkhir) {
                    result.push(num)
                }
            }
        }

        if (result.length === 0) {
            console.log("Nilai tidak ditemukan");
        } 
        else {
            for (let i = 0; i < result.length - 1; i++) {
                for (let j = 0; j < result.length - 1 - i; j++) {
                    if (result[j] > result[j + 1]) {
                        const temp = result[j]
                        result[j] = result[j + 1]
                        result[j + 1] = temp
                    }
                }
            }
            console.log(result)
        }
    }
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(4, 17, [2, 25, 4])
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
