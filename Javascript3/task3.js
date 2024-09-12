// Program ketersediaan suatu mata pelajaran di sebuah sekolah menggunakan then - catch
const checkLessons = (lesson) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lessons = ['MTK', 'IPA', 'Bahasa Indonesia', 'Bahasa Inggris']
            const isAvailable = lessons.includes(lesson)

            if (isAvailable) {
                resolve(`${lesson} is available`)
            } else {
                reject(new Error(`${lesson} is not available`))
            }
        }, 2000);
    });
};

checkLessons('IPS')
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error.message)
    })


// Program pemesanan tiket menggunakan try - catch
const ticket = (ticketType) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ticketsAvailable = ticketType === 'VIP'
            if (ticketsAvailable) {
                resolve(`Tiket ${ticketType} berhasil dipesan`)
            } else {
                reject(new Error(`Tiket ${ticketType} tidak tersedia`))
            }
        }, 1500)
    })
}

const checkTicket = async (typeOfTiket) => {
    try {
        const result = await ticket(typeOfTiket)
        console.log(result)
    } catch (error) {
        console.error(error.message)
    }
}

checkTicket('VIP')    