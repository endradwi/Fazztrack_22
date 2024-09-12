const devideAndSort = (integer) => {
    let arr = integer.split('0')
    arr = arr.map(segment => segment.split('').sort().join(''))
    const hasil = arr.join('')

    console.log(parseInt(hasil))
}

devideAndSort("5956560159466056")
