const names = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 
    'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 
    'Diana', 'Elizabets', 'Ella', 'Faith', 'Olivia', 'Penelope'
]

const filterKata = function (filter, limit, callback) {
    
    const lowerFilter = filter.toLowerCase()
    
    let searchResult = []

    for (let i = 0; i < names.length; i++) {
        const personName = names[i]
        const lowerName = personName.toLowerCase() 

        if (lowerName.includes(lowerFilter)) { 
            searchResult.push(personName)
        }

        if (searchResult.length >= limit) { 
            break 
        }
    }
    callback(searchResult)
}
function limitResult(arr) {
    console.log(arr)
}

filterKata("an", 3, limitResult)
