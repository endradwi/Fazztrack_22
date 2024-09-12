const cekHariKerja = (day)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const dataDay =['senin', 'selasa', 'rabu', 'kamis', 'jumat']
        let cek = dataDay.find((item)=>{
            return item === day
        })
        if(cek){
            resolve(cek)
        }else{
            reject(new Error('Hari ini bukan hari kerja'))
        }
      },3000)  
    })
}

cekHariKerja('senin')
    .then((day) => {
        console.log(`${day} Adalah hari kerja`)
    })
    .catch((error) => {
        console.error(error.message)
    })

async function checkHariKerja(day) {
    try {
        const result = await cekHariKerja(day)
        console.log('adalah hari kerja')
    } catch (error) {
        console.error(error.message)
    }
}
checkHariKerja('minggu')

